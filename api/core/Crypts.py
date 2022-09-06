lowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
numberss = ['0','1','2','3','4','5','6','7','8','9']
symbols = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','}','[',']',':',';','"','<',',','.','>','?','/','`','~',' ',"'",'“',"”",'’','│','|','–','\n']
uppers = []


def Get():
    uppers = []
    for i in lowers:
        uppers.append(i.upper())
    result = lowers + uppers + symbols + numberss
    return result

