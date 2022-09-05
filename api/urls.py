from django.urls import path

from . views import *

urlpatterns = [
    path('',Get_Users,name='overview'),
    path('create-user/',CREATE_USER,name='create-user'),
    path('login/<str:mail>/',Login,name='login'),
    path('verrify/<str:token>/',Verrify,name='verrify')
]
