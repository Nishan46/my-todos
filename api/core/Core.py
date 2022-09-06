import Crypts as Cryptor
from time import sleep

class ENCRYPT:

    def __init__(self,text):
        self.text = text
        self.__index = None
        self.__Binary_String = ""
        self.__Decimal_List = [64,32,16,8,4,2,1]
        self.Finaly = ""
        self.__symbols = Cryptor.Get()
        self.__symbols_length = (len(self.__symbols) - 1)

    def __str__(self):
        result = f'\n\nHey...\nI am from encrypt Object. I think you got what you want now.\nSo... Have a nice day ... !\n\n'
        return result

    def __Get_Code(self,key):
        Codes = (self.__symbols_length - key)
        return Codes
    
    def __Get_Binary(self):
        self.__Binary_String = ""
        for count in range(0,len(self.__Decimal_List)):
            if self.__index >= self.__Decimal_List[count]:
                self.__Binary_String +="1"
                self.__index = self.__index - self.__Decimal_List[count]
            else:
                self.__Binary_String +="0"
        return self.__Binary_String

    def Encript(self):       
        self.Finaly = ''
        for items in self.text :
            self.__index = ENCRYPT.__Get_Code(self,self.__symbols.index(items))
            self.Finaly += ENCRYPT.__Get_Binary(self)
        return self.Finaly 

class DECRYPT:

    def __init__(self,key):
        self.__first_filter = key.translate({ord('│'): None})
        self.Key = self.__first_filter.translate({ord(' '): None})
        self.__Peases = []
        self.__key_length = len(self.Key)
        self.__front_place = 0
        self.__Decimal_List = [64,32,16,8,4,2,1]
        self.__Decrypt_List =[]
        self.__symbols = Cryptor.Get()
        self.__symbols_length = (len(self.__symbols) - 1)
        self.__letter = 0
        self.__Finaly = ""

    def __str__(self):
        result = f'\n\nHey...\nI am from decrypt Object. I think you got what you want now.\nSo... Have a nice day ... !\n\n'
        return result

    def Cutting(self):
        for NOTHING in range(0,self.__key_length // 7):
            self.__Peases.append(self.Key[self.__front_place:self.__front_place + 7])
            self.__front_place += 7
        DECRYPT.Get_Decimal(self)
        return self.__Peases

    def Get_Decimal(self):
        for items in self.__Peases:
            count = 0
            decimal_int = 0
            for bits in items:
                if(bits == "1"):
                    decimal_int += self.__Decimal_List[count]
                    count +=1
                else:
                    count +=1
            self.__Decrypt_List.append(decimal_int)
        return self.__Decrypt_List
        
    def __Get_Code(self,key):
        Codes = (self.__symbols_length - key)
        return Codes        

    def Decrypt(self):
        DECRYPT.Cutting(self)
        self.__Finaly = ''
        for items in self.__Decrypt_List:     
            self.__letter = self.__symbols[DECRYPT.__Get_Code(self,items)]
            self.__Finaly += self.__letter
            sleep(0.01)
        return self.__Finaly


##for steps in track(range(len(self.__Decrypt_List)-1), description="[green bold] [DONE] --  "):     
##            self.__letter = self.__symbols[DECRYPT.__Get_Code(self,self.__Decrypt_List[steps])]
##            self.__Finaly += self.__letter
##            sleep(0.01)
##        return self.__Finaly
