import json
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer
from .models import Custom_User
from .Mailer import MAIL
from . import models
from . tokenGen import get_token
from api import serializers

# Create your views here.
@api_view(['GET'])
def Get_Users(request):
    Users = Custom_User.objects.all()
    serializer = UserSerializer(Users,many=True)
    return Response(serializer.data)

@api_view(['POST','GET'])
def CREATE_USER(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            jdata = {
                "message":"Successfully created !",
                "code":"200",
            }
            mail_data = {
            "SENDER":"nishantodoapp@gmail.com",
            "APP_PASSWORD":"svlccgflvnorsjyn",
            "RECIEVER":serializer.data.get('email'),
            "SUBJECT":"Your account has been created and activated !",
            "BODY":'Welcome to the NishanTodos . This is just portfillow App :)'
            }
            my_mail = MAIL(mail_data)
            print(my_mail.SEND())
            return Response(jdata)
        else:
            jdata = {
                "message":"Invalid form format",
                "code":"432"
            }
            return Response(jdata)
    else:
        return Response("Hey")
    

@api_view(['POST','GET'])
def Login(request,mail):
    try:
        User = Custom_User.objects.get(email = mail)
        User.token = get_token()
        User.save()
        serializer = UserSerializer(User,many=False)
        mail_data = {
            "SENDER":"nishantodoapp@gmail.com",
            "APP_PASSWORD":"svlccgflvnorsjyn",
            "RECIEVER":serializer.data.get('email'),
            "SUBJECT":"LogIn Key",
            "BODY":f"Use this key to Login\n{serializer.data.get('token')}"
            }
            
        # my_mail = MAIL(mail_data)
        # print(my_mail.SEND())

        return Response({
                'code':'200',
                "token":serializer.data.get('token')
                
            })
    except models.Custom_User.DoesNotExist as ex:
        return Response({
                'code':'305'
            })
    except Exception as ex:
        return Response({
            'message':'un handled exception - ' + str(ex),
            'code':'525'
        })

