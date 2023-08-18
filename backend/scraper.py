from bs4 import BeautifulSoup
import re
import requests

class House:
    def __init__(self, address, images, beds, bath, sqft, price):
        self.address = address
        self.images = images
        self.beds = beds
        self.bath = bath
        self.sqft = sqft
        self.price = price


city = "baltimore"
state= "md"

url = 'https://www.zillow.com/homes/' + city + ',-'+ state + '/'


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
info = (soup.find_all('a', href=True, attrs={"data-test": "property-card-link"}))

(info[0]["href"])

links = []
for item in info:
   links.append(item["href"])

Houses = []

for link in links:
    url = link

    with requests.Session() as s:
        response = s.get(url, headers=req_headers)

    soup = BeautifulSoup(response.text, 'html.parser')
    title = soup.title.text
    address = title.split('|')[0].strip() 

    images = (soup.find_all('img', attrs={"alt": ""}))
    if len(images) > 2:
        images = []

    fields = soup.find_all('strong')
    beds = fields[0].text
    baths = fields[1].text
    sqft = fields[2].text

    price = soup.find('span', attrs={'data-testid': 'price'}).text
    print(price)

    house = House(address, images, beds, baths, sqft, price)