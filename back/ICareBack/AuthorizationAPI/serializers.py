from rest_framework.exceptions import ValidationError
from rest_framework.authtoken.models import Token
from rest_framework import serializers, status
from django.contrib.auth.models import User
from .models import Profile, Application, Tag


class UserLoginSerializer(serializers.ModelSerializer):
    id = serializers.PrimaryKeyRelatedField(read_only=True)
    username = serializers.CharField(read_only=True)
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["id", "username", "password"]

class UserShowInfo(serializers.ModelSerializer):
    role = serializers.CharField(source = "profile.role") 
    class Meta:
        model = User
        fields = ["id", "username", "first_name",
        "last_name", "email", "role"]

class UserUpdateInfo(serializers.ModelSerializer):    
    class Meta:
        model = User
        fields = ["first_name", "last_name"]

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields ='__all__'


class UserRegisterSerializer(serializers.ModelSerializer):
    id = serializers.PrimaryKeyRelatedField(read_only=True)
    username = serializers.CharField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    role = serializers.CharField(source = "profile.role")      
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["id", "username", "first_name",
                  "last_name", "email", "password", "password2", "role"]
        extra_kwargs = {
            'password': {"write_only": True}
        }    

    def validate(self, instance):
        if instance['password'] != instance['password2']:
            raise ValidationError({"message": "Both password must match"})

        if User.objects.filter(email=instance['email']).exists():
            raise ValidationError({"message": "Email already taken!"})

        return instance

    def create(self, validated_data):
        passowrd = validated_data.pop('password')
        passowrd2 = validated_data.pop('password2')  
        
        profile = validated_data.pop('profile')             
        
        user = User.objects.create(**validated_data)
        user.set_password(passowrd)
        user.save()
        profile.update({'user_id': user.id})
        profile = Profile.objects.create(**profile)        
        
        Token.objects.create(user=user)
        return user

# class PostSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Application
#         fields = '__all__'
class PostSerializer(serializers.ModelSerializer):
    tags = serializers.SerializerMethodField()  # Custom field to include tag names
    
    class Meta:
        model = Application
        fields = '__all__'
    
    def get_tags(self, instance):
        return list(instance.tags.values_list('name', flat=True))


