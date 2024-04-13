from rest_framework import permissions
from .models import Profile

class IsVolonteer(permissions.BasePermission):
    def has_permission(self, request, view):        
        super().has_permission(request, view)        
        if request.user and request.user.profile.role == 'Volonteer':            
            return True
        return False

class IsSimpleUser(permissions.IsAuthenticated):
    def has_permission(self, request, view):
        super().has_permission(request, view)        
        if request.user and request.user.profile.role == 'SimpleUser':
            return True
        return False

