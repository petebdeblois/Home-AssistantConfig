import json
import time

state.persist('pyscript.hydro_yesterday_cost')
state.persist('pyscript.hydro_yesterday_total')
state.persist('pyscript.hydro_period_mean_daily_consumption')

hydro_yesterday_cost = 0
hydro_access_fee = 0.4116
price = 0.0834

@pyscript_compile
def hydro_open():
    with open('/config/data/private/data.json') as f:
        data = json.load(f)
    time.sleep(5)
    global yesterday_cost
    global yesterday_total
    global period_mean_daily_consumption
    yesterday_total = data['yesterday_data']['total_consumption']
    period_mean_daily_consumption = data['current_period']['period_mean_daily_consumption']
    yesterday_cost = round(
        hydro_access_fee + (float(yesterday_total) * price), 2)


@time_trigger("once(06:15:00)")
def hydro_states():
    hydro_open()
    
    state.set("sensor.hydro_yesterday_cost", value=yesterday_cost)
    state.setattr("sensor.hydro_yesterday_cost.unit_of_measurement", "$")
    state.setattr("sensor.hydro_yesterday_cost.friendly_name",
                  "Cost of yesterdays electrical Consumption")
    
    state.set("sensor.hydroquebec_yesterday_total_consumption", value=yesterday_total)
    state.setattr(
        "sensor.hydroquebec_yesterday_total_consumption.unit_of_measurement", "kwh")
    state.setattr(
        "sensor.hydroquebec_yesterday_total_consumption.friendly_name", "Yesterday kwh")
    
    state.set("sensor.hydroquebec_period_mean_daily_consumption",
              value=period_mean_daily_consumption)
    state.setattr(
        "sensor.hydroquebec_period_mean_daily_consumption.unit_of_measurement", "kwh")
    state.setattr(
        "sensor.hydroquebec_period_mean_daily_consumption.friendly_name", "Period Mean kwh")
