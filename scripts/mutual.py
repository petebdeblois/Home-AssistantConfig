import requests
from bs4 import BeautifulSoup
import json
import datetime

mmf = [
    {
        'ticker': 'CIG117',
        'url': 'https://ycharts.com/mutual_funds/M:CIG117.TO',
        'holding_celi': 0.0,
        'holding_reer': 203.5320,
        'holding_cri': 524.5360
    },
    {
        'ticker': 'FID1284',
        'url': 'https://ycharts.com/mutual_funds/M:FID1284.TO',
        'holding_celi': 0.0,
        'holding_reer': 383.4471,
        'holding_cri': 0.0
    },
    {
        'ticker': 'MMF4606',
        'url': 'https://ycharts.com/mutual_funds/M:MMF4606.TO',
        'holding_celi': 0.0,
        'holding_reer': 206.9180,
        'holding_cri': 158.1730
    },
    {
        'ticker': 'TML225',
        'url': 'https://ycharts.com/mutual_funds/M:TML225.TO',
        'holding_celi': 0.0,
        'holding_reer': 293.1741,
        'holding_cri': 0.0
    },
    {
        'ticker': 'CCM3503',
        'url': 'https://ycharts.com/mutual_funds/M:CCM3503.TO',
        'holding_celi': 247.285,
        'holding_reer': 0.0,
        'holding_cri': 2787.6480
    }
]

stocks = [
{
    "ticker": "dm_v",
    "holding": 75,
    "price_paid": 0.19
},
{
    "ticker": "rblx",
    "holding": 0.3367,
    "price_paid": 119.89
}
]
crypto = {
  "btc": 0
}

data = {'mmf': [], 'holding_mmf': [], 'date': [],
        'holding_stocks': [], 'holding_crypto': []}
celi = 0.0
reer = 0.0
cri = 0.0

current_time = datetime.datetime.now()

for i in range(len(mmf)):
    r = requests.get(mmf[i]['url'],
      headers={'User-agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0'})
    c = r.content
    soup = BeautifulSoup(c, "html.parser")
    # print(soup.prettify())
    price = soup.find("span", {"class": 'index-rank-value'}).text

    holding = round(float(price) * mmf[i]['holding_celi'] + float(
        price) * mmf[i]['holding_reer'] + float(price) * mmf[i]['holding_cri'])

    celi = celi + float(price) * mmf[i]['holding_celi']
    reer = reer + float(price) * mmf[i]['holding_reer']
    cri = cri + float(price) * mmf[i]['holding_cri']
    data['mmf'].append({'ticker': mmf[i]['ticker'],
                        'price': price,
                        'holding': holding})

for i in range(len(stocks)):
  data['holding_stocks'].append({"ticker": stocks[i]['ticker'],
                                "holding": stocks[i]['holding'],
                                'price_paid': stocks[i]['price_paid']})

total = round(celi + reer + cri)
data['holding_mmf'].append({"holding_celi": celi,
                            "holding_reer": reer,
                            "holding_cri": cri,
                            "holding_total": total
                            })
data['date'].append({'date': str(current_time)})
data['holding_crypto'].append(crypto)

with open("/usr/share/hassio/homeassistant/data/mutual.json", "w") as writeJSON:
#with open("mutual.json", "w") as writeJSON:
    json.dump(data, writeJSON, ensure_ascii=False)
