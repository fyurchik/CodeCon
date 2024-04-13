from django.urls import path 
from .views import UserRegisterAPIView, UserLoginAPIView, UserLogoutAPIView
from . import views
urlpatterns = [       
    path('', views.healthcheck),
    path('register/', UserRegisterAPIView.as_view()),
    path('login/', UserLoginAPIView.as_view(), name='login'),
    path('logout/', UserLogoutAPIView.as_view(), name='logout'),
]