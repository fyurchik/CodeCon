from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from django.contrib.auth.models import User, Group
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.exceptions import ValidationError
from .serializers import UserRegisterSerializer, UserLoginSerializer, UserShowInfo, PostSerializer
from .permissions import IsVolonteer, IsSimpleUser
from .models import Application
from django.core.paginator import Paginator, EmptyPage

from rest_framework.pagination import PageNumberPagination 


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
            #print(serializer.data)
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
@permission_classes([IsAuthenticated])
def getdata(request):
    if request.method == 'GET':       
        user = request.user
        serializer = UserShowInfo(user)   
        return Response({"user":serializer.data}, status=status.HTTP_200_OK)
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
@permission_classes([IsAuthenticated])# urgent, city, tags 
def application_list_view(request):    
    applications = Application.objects.all()
    allquantity = applications.count()
    quantity = allquantity//5

    perpage = request.query_params.get('perpage', default = 5)
    page = request.query_params.get('page', default=1)
    paginator = Paginator(applications, per_page = perpage)
    try:
        applications = paginator.page(number=page)
    except EmptyPage:
        applications = []

    serializer = PostSerializer(applications, many=True)    
    
    return Response({"results":serializer.data, "allpages":quantity, "all":allquantity})
