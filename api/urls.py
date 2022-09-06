from django.urls import path

from . views import *

urlpatterns = [
    path('',Get_Users,name='overview'),
    path('create-user/',CREATE_USER,name='create-user'),
    path('login/<str:mail>/<str:key>',Login,name='login'),
    path('verify/<str:tokken>/<str:key>',Verify,name='verrify'),
    path('get-todo/<str:token>/<str:key>',Get_Todo,name='get-todo'),
    path('test/',test_a,name='test')
]
