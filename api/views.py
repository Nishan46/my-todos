
from urllib import response
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer , TodoSerializer
from .models import Custom_User, Todo
from .Mailer import MAIL
from . import models
from . tokenGen import get_token
from api import serializers
from django.http import HttpResponse ,HttpResponseRedirect
from my_todo.settings import API_KEY , FRONTEND_LINK

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
def Login(request,mail,key):
    if API_KEY == key:
        try:
            if request.method == 'POST':
                ex = Custom_User.objects.filter(email = mail).count()
                if ex:
                    User = Custom_User.objects.get(email = mail)
                else:
                    User = Custom_User.objects.get(user_name = mail)
                
                User.token = get_token()
                User.save()
                serializer = UserSerializer(User,many=False)
                mail_data = {
                    "SENDER":"nishantodoapp@gmail.com",
                    "APP_PASSWORD":"svlccgflvnorsjyn",
                    "RECIEVER":serializer.data.get('email'),
                    "SUBJECT":"LogIn Key",
                    "BODY":f"""

                        Welcome {serializer.data.get('user_name')},\n
                        use this link to login,\n
                        verify here : {FRONTEND_LINK}/users/{serializer.data.get('email')}/{serializer.data.get('token')}\n

                        Thank You ...
                    """
                    }
                
                myMail = MAIL(mail_data)
                myMail.SEND()
                return Response({
                        'code':'200',
                        'email':serializer.data.get('email'),
                        'user_name':serializer.data.get('user_name'), 
                    })

            else:
                return Response({
                    "message":"Hellow there ... nothing to see here",
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
    else:
        response({
            "code":"503",
            "message":"KEY IS NOT VALID"
        })


@api_view(['POST','GET'])
def Verify(request,tokken,key):
    if key == API_KEY:
        try:
             User = Custom_User.objects.get(token = tokken)
             serializer = UserSerializer(User ,many=False)
             return Response({
                'code':'200',
                'data':serializer.data
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
    else:
        response({
            "code":"503",
            "message":"KEY IS NOT VALID"
        })

@api_view(['GET'])
def Get_Todo(request,token,key):
    if key == API_KEY:
        try:
            User = Custom_User.objects.get(token = token)
            Todos = Todo.objects.all()
            todos = Todos.filter(user = User)
            serializer = TodoSerializer(todos,many=True)
            return Response(serializer.data)


        except models.Custom_User.DoesNotExist as ex:
            return Response({
                    'code':'305'
                })
        except Exception as ex:
            return Response({
                'message':'un handled exception - ' + str(ex),
                'code':'525'
            })




























@api_view(['GET'])
def test_a(request):
    return Response({
        "message":"congratas!"
    })