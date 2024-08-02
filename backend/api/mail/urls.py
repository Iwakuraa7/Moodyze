from django.urls import path
from . import views

urlpatterns = [
    path('api', views.api_view),
    path('login', views.login_view, name='login'),
    path('register', views.register, name='register'),
    path('logout', views.logout_view, name='logout')    
]