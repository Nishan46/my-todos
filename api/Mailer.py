from email.message import EmailMessage
import ssl
import smtplib


class MAIL():
    
    def __init__(self, data):
        self.SENDER = data['SENDER']
        self.PASSWORD = data['APP_PASSWORD']
        self.RECIEVER = data['RECIEVER']
        self.SUBJECT = data['SUBJECT']
        self.BODY = data['BODY']

    def SEND(self):
        EMAIL_SENDER = EmailMessage()
        EMAIL_SENDER['from'] = self.SENDER
        EMAIL_SENDER['to'] = self.RECIEVER
        EMAIL_SENDER['subject'] = self.SUBJECT
        EMAIL_SENDER.set_content(self.BODY)
        CONTEXT = ssl.create_default_context()

        with smtplib.SMTP_SSL('smtp.gmail.com',465,context=CONTEXT) as smtp:
            smtp.login(self.SENDER,self.PASSWORD)
            smtp.sendmail(self.SENDER,self.RECIEVER,EMAIL_SENDER.as_string())
            return {
                "code":"210"
            }
