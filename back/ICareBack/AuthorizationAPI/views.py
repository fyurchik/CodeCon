from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.authtoken.models import Token
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status, viewsets
from rest_framework.views import APIView
from django.contrib.auth.models import User, Group
from django.core.paginator import Paginator, EmptyPage 
from .serializers import UserRegisterSerializer, UserLoginSerializer, UserShowInfo, PostSerializer, UserUpdateInfo, TagSerializer
from .permissions import IsVolonteer, IsSimpleUser
from .models import Application, Tag

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

@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def getdata(request):
    if request.method == 'GET':       
        user = request.user
        serializer = UserShowInfo(user)   
        return Response({"user":serializer.data}, status=status.HTTP_200_OK)
    if request.method == 'PUT':       
        serializer = UserShowInfo(instance=user, data=request.data)
        if serializer.is_valid():            
            user.first_name = serializer.validated_data.get('first_name', user.first_name)
            user.last_name = serializer.validated_data.get('last_name', user.last_name)            

            user.save() 
            
            updated_serializer = UserShowInfo(instance=user)
            return Response({"user": updated_serializer.data}, status=status.HTTP_200_OK)
    return Response({"message":"invalid Token"}, status=status.HTTP_400_BAD_REQUEST)


class PostViewSet(viewsets.ModelViewSet):    
    queryset = Application.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def get_permissions(self):    
        if self.action == 'create':
            permission_classes = [IsSimpleUser]    
        else:
            permission_classes = self.permission_classes    
        return [permission() for permission in permission_classes]
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def application_list_view(request):    
    if request.method =='GET':
        city = request.query_params.get('city')
        urgent = request.query_params.get('urgent')
        tags = request.query_params.getlist('tags')        
        title_query = request.query_params.get('title')
        applications = Application.objects.all().filter(active=True)
        
        if title_query:
            applications = applications.filter(title__icontains=title_query)

        allquantity = applications.count()
        quantity = allquantity//5
        print(tags)
        if tags and tags != ['all']:        
            applications = applications.filter(tags__name__in=tags)
        print(applications)
        if urgent != "all":         
            applications = applications.filter(urgent=urgent)
        if city:
            applications = applications.filter(city=city)        
    
            
        perpage = request.query_params.get('perpage', default = 5)
        page = request.query_params.get('page', default=1)
        paginator = Paginator(applications, per_page = perpage)
        
        try:
            applications = paginator.page(number=page)
        except EmptyPage:
            applications = []

        serializer = PostSerializer(applications, many=True)    
    
        return Response({"results":serializer.data, "allpages":quantity, "all":allquantity})
    return Response({"message":"Somethins goes wrong"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'DELETE', 'PUT'])
@permission_classes([IsSimpleUser])
def myapplications(request, pk=None):    
    if request.method =='GET':
        user = request.user
        applications = Application.objects.filter(user_id=user.id)
        serializer = PostSerializer(applications, many=True)    
        return Response({"results":serializer.data}, status=status.HTTP_200_OK)
    
    if request.method =='DELETE':
        user = request.user        
        applications = Application.objects.filter(user_id=user.id, id=pk)
        
        if applications.exists():
            applications.delete()
            return Response()
        return Response({"message":"Incorrect post id"})

    if request.method =='PUT':
        serializer = PostSerializer(application, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
@api_view(['GET']) 
def tags(request):
    tags = Tag.objects.all()
    serializer = TagSerializer(tags, many=True)

    return Response({"tags":serializer.data})
        


