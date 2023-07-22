from bs4 import BeautifulSoup
import re
import requests

city = "baltimore"
state="md"

url = 'https://www.zillow.com/homes/' + city + ',-'+ state + '_rb/'


req_headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,en;q=0.8',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
}

with requests.Session() as s:
    response = s.get(url, headers=req_headers)


soup = BeautifulSoup(response.text, 'html.parser')
houses = []



#print(soup.find_all('script', type='application/ld+json'))
print(soup.find_all('address'))
