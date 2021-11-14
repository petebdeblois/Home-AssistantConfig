import json
import time

list_ticker = ['CIG117', 'FID1284', 'MMF4606', 'TML225', 'CCM3503']

for ticker in range(len(list_ticker)):
  state.persist("pyscript.mmf_"+ list_ticker[ticker])

state.persist("pyscript.mmf_holding_celi")
state.persist("pyscript.mmf_holding_reer")
state.persist("pyscript.mmf_holding_cri")
state.persist("pyscript.mmf_holding_total")

@pyscript_compile
def read():
  global data
  with open('/config/data/mutual.json') as f:
    data = json.load(f)
  time.sleep(5)


@time_trigger("once(18:49:20)")
def write():
  read()

  state.set("sensor.finance_mmf_holding_celi", value=data['holding_mmf'][0]['holding_celi'])
  state.setattr("sensor.finance_mmf_holding_celi" + ".unit_of_measurement", "$")
  
  state.set("sensor.finance_mmf_holding_reer", value=data['holding_mmf'][0]['holding_reer'])
  state.setattr("sensor.finance_mmf_holding_reer" + ".unit_of_measurement", "$")
  
  state.set("sensor.finance_mmf_holding_cri", value=data['holding_mmf'][0]['holding_cri'])
  state.setattr("sensor.finance_mmf_holding_cri" + ".unit_of_measurement", "$")
  
  state.set("sensor.finance_mmf_holding_total", value=data['holding_mmf'][0]['holding_total'])
  state.setattr("sensor.finance_mmf_holding_total" + ".unit_of_measurement", "$")

  for i in range(len(data['mmf'])):
    state.set("sensor.finance_mmf_" + data['mmf'][i]['ticker'], value=data['mmf'][i]['price'])
    state.setattr("sensor.finance_mmf_" + data['mmf'][i]['ticker']+ ".unit_of_measurement", "$")
    state.setattr("sensor.finance_mmf_" + data['mmf'][i]['ticker']+ ".holdingtotal", value=data['mmf'][i]['holding'])
  
  for i in range(len(data['holding_stocks'])):
    state.set("sensor.finance_stocks_" + data['holding_stocks'][i]['ticker'], value=data['holding_stocks'][i]['holding'])
    state.setattr("sensor.finance_stocks_" + data['holding_stocks'][i]['ticker']+ ".unit_of_measurement", "shares")
    state.setattr("sensor.finance_stocks_" + data['holding_stocks'][i]['ticker']+ ".price_paid", value=data['holding_stocks'][i]['price_paid'])
