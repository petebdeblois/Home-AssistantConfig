import json
import time

state.persist('pyscript.yesterday_hourly_consumption_00')

list_var = ['yesterday_hourly_consumption_00',
'yesterday_hourly_consumption_01',
'yesterday_hourly_consumption_02',
'yesterday_hourly_consumption_03',
'yesterday_hourly_consumption_04',
'yesterday_hourly_consumption_05',
'yesterday_hourly_consumption_06',
'yesterday_hourly_consumption_07',
'yesterday_hourly_consumption_08',
'yesterday_hourly_consumption_09',
'yesterday_hourly_consumption_10',
'yesterday_hourly_consumption_11',
'yesterday_hourly_consumption_12',
'yesterday_hourly_consumption_13',
'yesterday_hourly_consumption_14',
'yesterday_hourly_consumption_15',
'yesterday_hourly_consumption_16',
'yesterday_hourly_consumption_17',
'yesterday_hourly_consumption_18',
'yesterday_hourly_consumption_19',
'yesterday_hourly_consumption_20',
'yesterday_hourly_consumption_21',
'yesterday_hourly_consumption_22',
'yesterday_hourly_consumption_23',
]
list_consumption = {}
list_hour = {}
hydro_yesterday_cost = 0
hydro_access_fee = 0.4116
lower_price = 0.0619
higher_price = 0.095


@pyscript_compile
def hydro_open():
  with open('config/data/private/data.json') as f:
    data = json.load(f)
  time.sleep(5)
  global yesterday_higher
  global yesterday_lower
  global list_date
  global hydro_yesterday_cost
  yesterday_lower = data['yesterday_data']['lower_price_consumption']
  yesterday_higher = data['yesterday_data']['higher_price_consumption']
  hydro_yesterday_cost = round(hydro_access_fee + (float(yesterday_lower) * lower_price) + (float(yesterday_higher) * higher_price),2)
  list_date = data['yesterday_data']['date']
  for i in range(len(data['hourly_data'])):
    list_consumption[i] = data['hourly_data'][i]['total_consumption']
    list_hour[i] = data['hourly_data'][i]['hour']

@time_trigger("once(05:30:30)")
def hydro_states():
    hydro_open()
    state.set("sensor.hydro_yesterday_cost", value=hydro_yesterday_cost)
    state.setattr("sensor.hydro_yesterday_cost.unit_of_measurement", "$")
    state.setattr("sensor.hydro_yesterday_cost.friendly_name", "Cost of yesterdays electrical Consumption")
    for i in range(len(list_var)):
      state.set("sensor." + list_var[i], value=list_consumption[i],)
      state.setattr("sensor." + list_var[i]+ ".unit_of_measurement", "Kwh")
    #state.setattr("sensor.hydroquebec_02_days_ago.icon, "'mdi:flash'"")
      if (list_hour[i] < 10):
        state.setattr("sensor." + list_var[i]+ ".friendly_name", "Consumption at 0" + str(list_hour[i]) )  
      else:
        state.setattr("sensor." + list_var[i]+ ".friendly_name", "Consumption at " + str(list_hour[i]) )
      state.setattr("sensor." + list_var[i]+ ".icon", "mdi:flash" )
      state.setattr("sensor." + list_var[i]+ ".date", "Consumption on " + str(list_date) )

