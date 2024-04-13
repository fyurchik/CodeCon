from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from django.contrib.auth.models import User, Group
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.exceptions import ValidationError
from .serializers import UserRegisterSerializer, UserLoginSerializer, UserShowInfo
from .permissions import IsVolonteer


@api_view(['GET'])
def healthcheck(request):
    return Response({"Lol":"Hello"})    

class UserLoginAPIView(APIView):
    def post(self, request, *args, **kargs):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            response = {
                "username": {
                    "detail": "User Doesnot exist!"
                }
            }
            if User.objects.filter(username=request.data['username']).exists():
                user = User.objects.get(username=request.data['username'])
                token, created = Token.objects.get_or_create(user=user)
                response = {
                    'success': True,                    
                    'token': token.key,
                    'user':{
                        'username': user.username,
                        'email': user.email,
                        'first_name': user.first_name,
                        'last_name': user.last_name,
                        'id': user.id
                        }
                }
                return Response(response, status=status.HTTP_200_OK)
            return Response(response, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserRegisterAPIView(APIView):
    def post(self, request, *args, **kargs):
        serializer = UserRegisterSerializer(data=request.data)        
        if serializer.is_valid():            
            serializer.save()
            print(serializer.data)
            response = {
                'success': True,
                'user': serializer.data,
                'token': Token.objects.get(user=User.objects.get(username=serializer.data['username'])).key
            }
           
            return Response(response, status=status.HTTP_200_OK)
        raise ValidationError(
            serializer.errors, code=status.HTTP_406_NOT_ACCEPTABLE)

class UserLogoutAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args):
        token = Token.objects.get(user=request.user)
        token.delete()
        return Response({"success": True, "detail": "Logged out!"}, status=status.HTTP_200_OK)

@api_view(['GET'])
def getdata(request):
    if request.method == 'GET':         
        auth_header = request.headers.get('Authorization')
        token_key = auth_header
        token = Token.objects.get(key=token_key)
        user = token.user
        serializer = UserShowInfo(user)   
        return Response({"user":serializer.data}, status=status.HTTP_200_OK)
    return Response({"message":"invalid Token"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsVolonteer])
def ShowOnlyForVolonteer(request):
    # my_group = Group.objects.get(name='my_group_name') 
    # my_group.user_set.add(your_user)
    return Response()