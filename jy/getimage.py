# from test import response
from recover import img_recover
from geetest import get_distance
import time
import re
import json
import random
import track
import execjs

from urllib import request
from numpy.lib.type_check import imag

from PIL import Image, ImageChops
import numpy as np
import time


import requests
from PIL import Image

# from ..picture import ImageHandler
# from ..slide import get_path

class SlideTrace():
     p = [[-24,-42,0],[0,0,0],[1,0,63],[3,0,71],[5,0,81],[7,0,86],[9,0,102],[11,0,103],[14,0,112],[17,0,117],[19,0,123],[22,0,131],[26,0,139],[29,0,147],[31,0,155],[34,0,163],[36,0,171],[39,0,179],[42,0,187],[44,0,195],[47,0,204],[52,0,213],[55,0,218],[59,0,231],[65,0,234],[70,0,247],[74,0,250],[78,0,259],[81,0,266],[84,-1,274],[86,-1,281],[87,-1,288],[88,-1,297],[89,-1,304],[90,-1,313],[91,-1,320],[92,-1,330],[93,-1,347],[94,-1,350],[95,-1,366],[96,0,374],[98,0,382],[100,0,390],[102,0,398],[105,1,406],[108,1,414],[110,1,422],[113,1,430],[115,1,436],[117,1,446],[119,1,463],[120,1,468],[121,1,480],[122,1,484],[123,1,495],[124,1,522],[124,1,532],[126,2,538],[128,2,547],[131,2,555],[133,2,564],[136,2,570],[138,2,579],[139,2,584],[140,2,595],[141,2,600],[142,2,608],[143,2,616],[144,2,764],[145,2,782],[146,2,802],[147,2,814],[149,2,818],[150,3,831],[151,3,834],[152,3,848],[153,3,850],[154,3,1028],[154,3,1047],[155,4,1052],[156,4,1068],[157,4,1080],[159,4,1129],[161,4,1138],[162,4,1146],[164,4,1154],[165,5,1162],[166,5,1178],[166,6,1302],[166,6,1550],[165,5,1561],[164,4,1582],[164,3,1606],[163,3,2150],[162,2,2163],[162,1,2175],[162,1,2589]]

     @staticmethod
     def generate_path(pointer, scale_factor):
          x = pointer[0]
          y = pointer[1]
          t = pointer[2]
          return [int(x * scale_factor), y, t]

     @classmethod
     def get_path(self, target_point):
          scale_factor = target_point / 162
          new_path = [self.generate_path(x, scale_factor) for x in self.p]
          return new_path

class ImageHandler(object):

    @classmethod
    def subtract(cls, bg, fullbg):
        fullbg = cls.spell(fullbg)
        bg = cls.spell(bg)
        image = ImageChops.difference(fullbg, bg)
        fullbg.close()
        bg.close()
        # print('Handlewidth:', image.width)
        image = image.point(lambda x: 255 if x > 80 else 0)
        image = image.resize((260, 160), Image.ANTIALIAS)
        return cls.calculate_x(image)

    @staticmethod
    def spell(image):
        mapping_before_exchange = {
            0: 39, 1: 38, 2: 48, 3: 49, 4: 41, 5: 40, 6: 46, 7: 47, 8: 35, 9: 34, 10: 50, 11: 51, 12: 33, 13: 32, 14: 28,
            15: 29, 16: 27, 17: 26, 18: 36, 19: 37, 20: 31, 21: 30, 22: 44, 23: 45, 24: 43, 25: 42, 26: 12, 27: 13, 28: 23,
            29: 22, 30: 14, 31: 15, 32: 21, 33: 20, 34: 8, 35: 9, 36: 25, 37: 24, 38: 6, 39: 7, 40: 3, 41: 2, 42: 0, 43: 1,
            44: 11, 45: 10, 46: 4, 47: 5, 48: 19, 49: 18, 50: 16, 51: 17,
        }
        mapping = {value: key for key, value in mapping_before_exchange.items()}

        matrix = np.array(image)
        m1 = matrix[0: 80]
        m2 = matrix[80: 160]
        s1 = [np.array([i[j: j + 12] for i in m1]) for j in range(0, 312, 12)]
        s2 = [np.array([i[j: j + 12] for i in m2]) for j in range(0, 312, 12)]
        s = s1 + s2

        dic = {key: value for key, value in enumerate(s)}
        dic_exchange = {mapping[i]: dic[i] for i in range(52)}

        lis = [i[1] for i in sorted(dic_exchange.items(), key=lambda x: x[0])]

        n = []
        for i in range(80):
            n1 = []
            for j in lis[0: 26]:
                n1.extend(list(j[i]))
            n.append(n1)

        for i in range(80):
            n2 = []
            for j in lis[26: 52]:
                n2.extend(list(j[i]))
            n.append(n2)

        image = Image.fromarray(np.array(n))
        image.save(f'{time.time()}.jpg')

        return image

    @staticmethod
    def calculate_x(image):
        for i in range(0, image.width):
            count = 0
            for j in range(0, image.height):
                pixel = image.getpixel((i, j))
                if pixel != (0, 0, 0):
                    count += 1

            if count >= 5:
                x = i + 23 - 30
                return x

class GetImage:

    def __init__(self):
        # self.url = 'https://api.shujuling.com/uaa/geetest/pc/register'
        self.headers = {
            'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36',
        }
        self.service_url = "http://127.0.0.1:3000/tools/jiyan/firstw"
        self.ajax_url = "http://127.0.0.1:3000/tools/jiyan/ajaxw"
        self.last_w_url = "http://127.0.0.1:3000/tools/jiyan/lastw"
        self.gt = None
        self.challenge = None


    def register(self):
        url = 'https://api.shujuling.com/uaa/geetest/pc/register'  
        headers = self.headers

        res = requests.get(url, headers=headers).json()

        gt = res.get('gt', None)
        challenge = res.get('challenge', None)

        if gt is None or challenge is None:
            return False

        return self.req_gettype(gt, challenge)

    def get_first_w(self, gt, challenge):
        payload = {"gt": gt,"challenge": challenge}
        response = requests.post(url=self.service_url, json=payload)
        return response.json().get('ans', None)

    def get_ajax_w(self, gt, challenge, c, s):
        payload = {"gt": gt,"challenge": challenge, "c": c, "s": s}
        response = requests.post(url=self.ajax_url, json=payload)
        return response.json().get('ans', None)

    def get_last_w(self, gt, challenge, c, s, n, t, slide_trace):
        payload = {
            "gt": gt,
            "challenge": challenge,
            "c": c,
            "s": s,
            "n": n,
            "t": t,
            "slide_trace": slide_trace,
        }
        response = requests.post(url=self.last_w_url, json=payload)
        return response.json().get('ans', None)

    def req_gettype(self, gt, challenge):
        url = f'https://api.geetest.com/gettype.php?gt={gt}&callback=geetest_{str(int(time.time()*1000))}'
        headers = self.headers

        session = requests.session()
        r = session.get(url,headers=headers, timeout=10)

        self.gt = gt if self.gt is None else None
        self.challenge = challenge if self.challenge is None else None

        first_w = self.get_first_w(gt, challenge)
        return self.req_get_php(session, first_w)

        
    def req_get_php(self, session, first_w):
        data = {
            "gt": self.gt,
            "challenge": self.challenge,
            "lang": "zh-cn",
            "pt": 0,
            "client_type": "web",
            "w": first_w,
            "callback": f'geetest_{str(int(time.time()*1000))}'
        }
        r = session.get('https://api.geetest.com/get.php',params=data, headers=self.headers,timeout=10)
        ret_data = re.findall('.*?({.*?})\)',r.text)[0]
        ret_data = json.loads(ret_data)
        c = ret_data['data']['c']
        s = ret_data['data']['s']
        return self.req_ajax_php(session, self.gt, self.challenge, c, s)

    def req_ajax_php(self, session, gt, challenge, c, s):

        ajax_w = self.get_ajax_w(gt, challenge, c, s)

        data = {
            "gt": self.gt,
            "challenge": self.challenge,
            "lang": "zh-cn",
            "pt": '0',
            "client_type": "web",
            "w": ajax_w,
            "callback": f'geetest_{str(int(time.time()*1000))}',
        }
        # time.sleep(5)
        res = session.get('https://api.geetest.com/ajax.php', params=data, headers=self.headers,timeout=10)
        return self.req_get_php_again(session, c, s)

    def req_get_php_again(self, session, c, s):
        url = 'https://api.geetest.com/get.php'
        data = {
            "is_next": "true",
            "type": "slide3",
            "gt": self.gt,
            "challenge": self.challenge,
            "lang": "zh-cn",
            "https": "true",
            "protocol": "https://",
            "offline": "false",
            "product": "embed",
            "api_server": "api.geetest.com",
            # "isPC": "true",
            # "area": "#geetest-wrap",
            "width": "100%",
            "callback": 'geetest_' + str(int(time.time() * 1000))
        }
        r = session.get('https://api.geetest.com/get.php', params=data, headers=self.headers)
        # r = requests.get('https://api.geetest.com/get.php', params=data, headers=self.headers
        req_data = re.findall('.*?({.*?})\)', r.text)[0]
        req_data = json.loads(req_data)
        request.urlretrieve('https://static.geetest.com/' + req_data["bg"], 'gap.webp')
        request.urlretrieve('https://static.geetest.com/' + req_data["fullbg"], 'full.webp')
        img_recover()
        x_pos = get_distance() - 5
        print(x_pos)
        arr = SlideTrace.get_path(x_pos)
        t = arr[-1][0]
        n = arr[-1][2]
        # with open('/home/mikasa/ImageTest/jy/slide.js', 'r', encoding='utf-8')as f:
        #     content = f.read()
        # ctx = execjs.compile(content)
        # three_w = ctx.call('get_last_w', t, arr, n, req_data["challenge"], self.gt, req_data["c"], req_data["s"])


        slide_trace = SlideTrace.get_path(x_pos)
        three_w = self.get_last_w(self.gt, self.challenge, c, s, slide_trace[-1][-1], x_pos, slide_trace)

        data = {
        'gt': self.gt,
        'challenge': req_data["challenge"],
        'lang': 'zh-cn',
        'pt': '0',
        'w': three_w,
        "client_type": "web",
        'callback': 'geetest_' + str(int(time.time() * 1000))
        }
        print(data)
        r = requests.get('https://api.geetest.com/ajax.php', params=data, headers=self.headers, )
        print(r.text)



        # print(r.text)
    # def slide(self, session):

class ImgProcess:

    """
    此文件代码来自 https://github.com/OSinoooO/bilibili_geetest/blob/master/bilibili_geetest_crack.py
    """
    location_list = [
        {'y': -58, 'x': -157},
        {'y': -58, 'x': -145},
        {'y': -58, 'x': -265},
        {'y': -58, 'x': -277},
        {'y': -58, 'x': -181},
        {'y': -58, 'x': -169},
        {'y': -58, 'x': -241},
        {'y': -58, 'x': -253},
        {'y': -58, 'x': -109},
        {'y': -58, 'x': -97},
        {'y': -58, 'x': -289},
        {'y': -58, 'x': -301},
        {'y': -58, 'x': -85},
        {'y': -58, 'x': -73},
        {'y': -58, 'x': -25},
        {'y': -58, 'x': -37},
        {'y': -58, 'x': -13},
        {'y': -58, 'x': -1},
        {'y': -58, 'x': -121},
        {'y': -58, 'x': -133},
        {'y': -58, 'x': -61},
        {'y': -58, 'x': -49},
        {'y': -58, 'x': -217},
        {'y': -58, 'x': -229},
        {'y': -58, 'x': -205},
        {'y': -58, 'x': -193},
        {'y': 0, 'x': -145},
        {'y': 0, 'x': -157},
        {'y': 0, 'x': -277},
        {'y': 0, 'x': -265},
        {'y': 0, 'x': -169},
        {'y': 0, 'x': -181},
        {'y': 0, 'x': -253},
        {'y': 0, 'x': -241},
        {'y': 0, 'x': -97},
        {'y': 0, 'x': -109},
        {'y': 0, 'x': -301},
        {'y': 0, 'x': -289},
        {'y': 0, 'x': -73},
        {'y': 0, 'x': -85},
        {'y': 0, 'x': -37},
        {'y': 0, 'x': -25},
        {'y': 0, 'x': -1},
        {'y': 0, 'x': -13},
        {'y': 0, 'x': -133},
        {'y': 0, 'x': -121},
        {'y': 0, 'x': -49},
        {'y': 0, 'x': -61},
        {'y': 0, 'x': -229},
        {'y': 0, 'x': -217},
        {'y': 0, 'x': -193},
        {'y': 0, 'x': -205}
    ]

    def get_merge_image(self, filename):
        """
        根据图片位置合并还原
        :param filename: 图片
        :param location: 位置
        :return:合并后的图片对象
        """
        im = Image.open(filename)
        width, height = im.size

        new_im = Image.new('RGB', (260, height))
        im_list_upper = []
        im_list_lower = []

        for location in self.location_list:
            if location['y'] == -58:
                im_list_upper.append(im.crop((abs(location['x']), height//2, abs(location['x']) + 10, height)))
            if location['y'] == 0:
                im_list_lower.append(im.crop((abs(location['x']), 0, abs(location['x']) + 10, height//2)))

        x_offset = 0
        for img in im_list_upper:
            new_im.paste(img, (x_offset, 0))
            x_offset += img.size[0]

        x_offset = 0
        for img in im_list_lower:
            new_im.paste(img, (x_offset, height//2))
            x_offset += img.size[0]
        return new_im

    def is_px_equal(self, img1, img2, x, y):
        """
        判断两个像素是否相同
        :param img1: 图片1
        :param img2:图片2
        :param x:位置1
        :param y:位置2
        :return:像素是否相同
        """
        pix1 = img1.load()[x, y]
        pix2 = img2.load()[x, y]
        threshold = 60

        if abs(pix1[0] - pix2[0]) < threshold and abs(pix1[1] - pix2[1]) < threshold and abs(
                        pix1[2] - pix2[2]) < threshold:
            return True
        else:
            return False

    def get_gap(self, img1, img2):
        """
        获取缺口偏移量
        :param img1: 不带缺口图片
        :param img2: 带缺口图片
        :return:
        """
        left = 0
        for i in range(left, img1.size[0]):
            for j in range(img1.size[1]):
                if not self.is_px_equal(img1, img2, i, j):
                    left = i
                    return left
        return left


if __name__ == "__main__":

    a = time.time()
    img = GetImage()

    img.register()
    b = time.time()
    print(b - a)