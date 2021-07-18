import json

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
list_date = None

@pyscript_compile
def hydro_open():
  with open('config/data/data.json') as f:
    data = json.load(f)
  for i in range(len(data['hourly_data'])):
    list_date = data['yesterday_data']['date']
    list_consumption[i] = data['hourly_data'][i]['total_consumption']
    list_hour[i] = data['hourly_data'][i]['hour']

@time_trigger("once(06:30:00)")
def hydro_states():
    hydro_open()
    for i in range(len(list_var)):
      #log.info(list_var[i] + ' = ' + str(list_consumption[i]))
      state.set("sensor." + list_var[i], value=list_consumption[i],)
      state.setattr("sensor." + list_var[i]+ ".unit_of_measurement", "Kwh")
    #state.setattr("sensor.hydroquebec_02_days_ago.icon, "'mdi:flash'"")
      if (list_hour[i] < 10):
        state.setattr("sensor." + list_var[i]+ ".friendly_name", "Consumption at 0" + str(list_hour[i]) )  
      else:
        state.setattr("sensor." + list_var[i]+ ".friendly_name", "Consumption at " + str(list_hour[i]) )
      state.setattr("sensor." + list_var[i]+ ".icon", "mdi:flash" )
      state.setattr("sensor." + list_var[i]+ ".date", "Consumption on " + str(list_date) )
    log.info("Hourly hydro script has run")

