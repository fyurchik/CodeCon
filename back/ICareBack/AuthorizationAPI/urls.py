from django.urls import path 
from .views import UserRegisterAPIView, UserLoginAPIView, UserLogoutAPIView, PostViewSet
from . import views
urlpatterns = [       
    path('', views.healthcheck),
    path('register/', UserRegisterAPIView.as_view()),
    path('login/', UserLoginAPIView.as_view(), name='login'),
    path('logout/', UserLogoutAPIView.as_view(), name='logout'),
    path('getuserdata/', views.getdata, name='userinfo'),
    path('makepost/', PostViewSet.as_view({'get': 'list','post': 'create'}), name='makepost'),
    path('makepost/<int:pk>', PostViewSet.as_view({'get': 'retrieve','delete':'destroy'})),
]