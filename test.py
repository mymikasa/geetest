# from PIL import Image

# filename = 'imagefile/test.jpg'

# im = Image.open(filename)

# im.crop((0, 0, 10, 80))
# (0, 0, 10, 80)

import requests

url = "http://127.0.0.1:3000/tools/jiyan/firstw"

payload = {"gt": "9e39449328e9e204b9c98fee1cce2a94","challenge": "c5fa60df282304286402de75c3b102c6"}
headers = {
    'accept': "application/xml",
    'content-type': "application/json",
    }

response = requests.post(url, json=payload)

print(response.text)