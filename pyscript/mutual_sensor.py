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


@time_trigger("once(06:19:45)")
def write():
  read()

  state.set("sensor.mmf_holding_celi", value=data['holding'][0]['holding_celi'])
  state.setattr("sensor.mmf_holding_celi" + ".unit_of_measurement", "$")
  
  state.set("sensor.mmf_holding_reer", value=data['holding'][0]['holding_reer'])
  state.setattr("sensor.mmf_holding_reer" + ".unit_of_measurement", "$")
  
  state.set("sensor.mmf_holding_cri", value=data['holding'][0]['holding_cri'])
  state.setattr("sensor.mmf_holding_cri" + ".unit_of_measurement", "$")
  
  state.set("sensor.mmf_holding_total", value=data['holding'][0]['holding_total'])
  state.setattr("sensor.mmf_holding_total" + ".unit_of_measurement", "$")

  for i in range(len(data['mmf'])):
    state.set("sensor.mmf_" + data['mmf'][i]['ticker'], value=data['mmf'][i]['price'])
    state.setattr("sensor.mmf_" + data['mmf'][i]['ticker']+ ".unit_of_measurement", "$")
    state.setattr("sensor.mmf_" + data['mmf'][i]['ticker']+ ".holdingtotal", value=data['mmf'][i]['holding'])
