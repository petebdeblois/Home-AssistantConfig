import json
import time

list_ticker = ['CIG117', 'FID1284', 'MMF4606', 'TML225', 'CCM3503']

for ticker in range(len(list_ticker)):
  state.persist("pyscript.mmf_"+ list_ticker[ticker])

state.persist("pyscript.finance_mmf_holding_celi")
state.persist("pyscript.finance_mmf_holding_reer")
state.persist("pyscript.finance_mmf_holding_cri")
state.persist("pyscript.finance_mmf_holding_total")
state.persist("pyscript.finance_mmf_holding_ccm3503")
state.persist("pyscript.finance_mmf_holding_cig117")
state.persist("pyscript.finance_mmf_holding_fid1284")
state.persist("pyscript.finance_mmf_holding_mmf4606")
state.persist("pyscript.finance_mmf_holding_tml225")
state.persist("pyscript.finance_stocks_cvo_to")
state.persist("pyscript.finance_stocks_cvo_to_vested")
state.persist("pyscript.finance_stocks_dm_v")
state.persist("pyscript.finance_stocks_rblx")
state.persist("pyscript.finance_crypto_iq")
state.persist("pyscript.finance_crypto_xmr")
state.persist("pyscript.finance_crypto_btc")




@pyscript_compile
def read():
  global data
  with open('/config/data/mutual.json') as f:
    data = json.load(f)
  time.sleep(5)


#@time_trigger("once(17:52:30)")
#@time_trigger("cron(*/15 9-17 * * 1-5)")
@time_trigger("cron(37 * * * *)")
def write():
  read()

########################################################################################
##############################  MMF      #############################################
########################################################################################
  state.set("sensor.finance_mmf_holding_celi", value=data['holding_mmf'][0]['holding_celi'])
  state.setattr("sensor.finance_mmf_holding_celi" + ".unit_of_measurement", "$")
  state.set("sensor.finance_mmf_holding_celi_julie", value=data['holding_mmf'][0]['holding_celi_julie'])
  state.setattr("sensor.finance_mmf_holding_celi_julie" + ".unit_of_measurement", "$")
  
  state.set("sensor.finance_mmf_holding_reer", value=data['holding_mmf'][0]['holding_reer'])
  state.setattr("sensor.finance_mmf_holding_reer" + ".unit_of_measurement", "$")
  state.set("sensor.finance_mmf_holding_reer_julie",
            value=data['holding_mmf'][0]['holding_reer_julie'])
  state.setattr("sensor.finance_mmf_holding_reer_julie" +
                ".unit_of_measurement", "$")
  
  state.set("sensor.finance_mmf_holding_cri", value=data['holding_mmf'][0]['holding_cri'])
  state.setattr("sensor.finance_mmf_holding_cri" + ".unit_of_measurement", "$")
  state.set("sensor.finance_mmf_holding_cri_julie",
            value=data['holding_mmf'][0]['holding_cri_julie'])
  state.setattr("sensor.finance_mmf_holding_cri_julie" +
                ".unit_of_measurement", "$")
  
  state.set("sensor.finance_mmf_holding_total", value=data['holding_mmf'][0]['holding_total'])
  state.setattr("sensor.finance_mmf_holding_total" + ".unit_of_measurement", "$")
  state.set("sensor.finance_mmf_holding_total_julie",
            value=data['holding_mmf'][0]['holding_total_julie'])
  state.setattr("sensor.finance_mmf_holding_total_julie" + ".unit_of_measurement", "$")
  state.set("sensor.finance_mmf_holding_total_pete",
            value=data['holding_mmf'][0]['holding_total_pete'])
  state.setattr("sensor.finance_mmf_holding_total_pete" + ".unit_of_measurement", "$")

  for i in range(len(data['mmf'])):
    state.set("sensor.finance_mmf_" + data['mmf'][i]['ticker'], value=data['mmf'][i]['price'])
    state.setattr("sensor.finance_mmf_" + data['mmf'][i]['ticker']+ ".unit_of_measurement", "$")
    state.setattr("sensor.finance_mmf_" + data['mmf'][i]['ticker']+ ".holdingtotal", value=data['mmf'][i]['holding'])
  
########################################################################################
##############################  STOCK      #############################################
########################################################################################

  for i in range(len(data['holding_stocks'])):
    state.set("sensor.finance_stocks_" + data['holding_stocks'][i]['ticker'], value=data['holding_stocks'][i]['holding'])
    state.setattr("sensor.finance_stocks_" + data['holding_stocks'][i]['ticker']+ ".unit_of_measurement", "shares")
    state.setattr("sensor.finance_stocks_" + data['holding_stocks'][i]['ticker']+ ".price_paid", value=data['holding_stocks'][i]['price_paid'])

########################################################################################
##############################  CRYPTO     #############################################
########################################################################################
  
  for i in range(len(data['holding_crypto'])):
    state.set("sensor.finance_crypto_" + data['holding_crypto'][i]['ticker'], value=data['holding_crypto'][i]['holding'])
    state.setattr("sensor.finance_crypto_" + data['holding_crypto'][i]['ticker']+ ".unit_of_measurement", "coin")
  log.warning("Script Mutual has runned")
