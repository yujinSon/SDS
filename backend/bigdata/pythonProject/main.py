# 통계청 데이터 가져와서 쓰기###################################
# from pandas.io.json import json_normalize
# import pandas as pd
# import requests
#
# json_Url = 'https://kosis.kr/openapi/Param/statisticsParameterData.do?method=getList&apiKey=NTRhNDNjYTlkYWQ4YzljZGI0YzNkOGRmNzYzN2E3YTI=&itmId=T2+T3+T4+&objL1=ALL&objL2=ALL&objL3=&objL4=&objL5=&objL6=&objL7=&objL8=&format=sdmx&jsonVD=Y&type=DSD&orgId=101&tblId=DT_1B04005N&version=v2_1'
# # 데이터 요청 정상여부 확인 <Response [200]> 결과값 = '요청 성공'
# test = requests.get(json_Url)
# test
#
# # JSON데이터 가져오기
# test_data = test.json()
# test_data
#
# # pandas 활용 데이터 형태 변환
# df = pd.json_normalize(test_data)
# df.head(1)
# df
#
# print(df)
#
# # csv 형태로 저장하기
# df.to_csv('test1.csv', encoding = 'cp949')

# 워드 클라우드 구현 ##################################
from wordcloud import WordCloud
from PIL import Image
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

def transform_zeros(val):
    if val == 0:
       return 255
    else:
       return val


# 파일에 있는 데이터 불러오기
df = pd.read_csv("C:/Users/SSAFY/Desktop/fruit_vegetable.csv", encoding="utf-8")
wc = df.set_index("title").to_dict()["count"]

img = Image.open('C:/Users/SSAFY/Desktop/cloud.png')
imgArray = np.array(img)

maskable_image = np.ndarray((imgArray.shape[0], imgArray.shape[1]), np.int32)

for i in range(len(imgArray)):
    maskable_image[i] = list(map(transform_zeros, imgArray[i]))

wordCloud = WordCloud(
    font_path='malgun',
    width=400,
    height=400,
    max_font_size=100,
    colormap='RdPu_r',
    mask=maskable_image,
    mode="RGBA",
    background_color=None
).generate_from_frequencies(wc)
wordCloud.to_file(filename="wordcloud.png")
plt.figure()
plt.imshow(wordCloud, interpolation='bilinear')
plt.axis('off')
plt.show()
