from rest_framework import permissions

class IsVolonteer(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user and request.user.groups.filter(name='Volunteer'):
            return True
        return False