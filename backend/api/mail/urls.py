from django.urls import path
from . import views

urlpatterns = [
    path('api', views.api_view),
    path('login', views.login_view, name='login'),
    path('register', views.register, name='register'),
    path('logout', views.logout_view, name='logout'),
    path('save_emotion', views.save_emotion, name='save_emotion'),
    path('get_user_id', views.get_user_id, name='get_user_id'),
    path('get_user_calendar/<int:user_id>', views.get_user_calendar, name='get_user_calendar')   
]