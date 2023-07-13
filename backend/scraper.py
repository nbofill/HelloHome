
import os
from bs4 import BeautifulSoup
import numpy as np
import pandas as pd
import regex as re
import requests

pd.set_option('display.max_rows', None)
pd.set_option('mode.chained_assignment',None)

url = 'https://www.zillow.com/homes/' + city + ',-'+ state + '_rb/'
headers = headers = {
    'authority': 'www.zillow.com',
    'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36',
    'accept': '*/*',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://www.zillow.com/los-angeles-ca/2_p/?searchQueryState=%7B%22pagination%22%3A%7B%22currentPage%22%3A2%7D%2C%22usersSearchTerm%22%3A%22Los%20Angeles%22%2C%22mapBounds%22%3A%7B%22west%22%3A-118.88620504589845%2C%22east%22%3A-117.93726095410157%2C%22south%22%3A33.54554919445917%2C%22north%22%3A34.49481997322805%7D%2C%22regionSelection%22%3A%5B%7B%22regionId%22%3A12447%2C%22regionType%22%3A6%7D%5D%2C%22isMapVisible%22%3Atrue%2C%22filterState%22%3A%7B%22sort%22%3A%7B%22value%22%3A%22globalrelevanceex%22%7D%2C%22ah%22%3A%7B%22value%22%3Atrue%7D%7D%2C%22isListVisible%22%3Atrue%7D',
    'accept-language': 'en-US,en;q=0.9',
}

response = requests.get(url, headers=headers)