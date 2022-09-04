import random
import string

def get_token():
    # choose from all lowercase letter
    letters = string.hexdigits
    return ''.join(random.choice(letters) for i in range(50))