from datetime import datetime, timedelta, date

"""
Time test script 
"""
@time_trigger("once(14:39:00)")
def update_history_hydro():


    state.setattr("sensor.hydroquebec_02_days_ago.unit_of_measurement", "Kwh")
    #state.setattr("sensor.hydroquebec_02_days_ago.icon, "'mdi:flash'"")
    state.setattr("sensor.hydroquebec_02_days_ago.friendly_name", "Hydro Quebec History 2 Days Ago")

    state.setattr("sensor.hydroquebec_03_days_ago.unit_of_measurement", "Kwh")
    #state.setattr("sensor.hydroquebec_03_days_ago.icon, "'mdi:flash'"")
    state.setattr("sensor.hydroquebec_03_days_ago.friendly_name", "Hydro Quebec History 3 Days Ago")

    state.setattr("sensor.hydroquebec_04_days_ago.unit_of_measurement", "Kwh")
    #state.setattr("sensor.hydroquebec_04_days_ago.icon, "'mdi:flash'"")
    state.setattr("sensor.hydroquebec_04_days_ago.friendly_name", "Hydro Quebec History 4 Days Ago")

    state.setattr("sensor.hydroquebec_05_days_ago.unit_of_measurement", "Kwh")
    #state.setattr("sensor.hydroquebec_05_days_ago.icon, "'mdi:flash'"")
    state.setattr("sensor.hydroquebec_05_days_ago.friendly_name", "Hydro Quebec History 5 Days Ago")

    state.setattr("sensor.hydroquebec_06_days_ago.unit_of_measurement", "Kwh")
    #state.setattr("sensor.hydroquebec_06_days_ago.icon, "'mdi:flash'"")
    state.setattr("sensor.hydroquebec_06_days_ago.friendly_name", "Hydro Quebec History 6 Days Ago")

    state.setattr("sensor.hydroquebec_07_days_ago.unit_of_measurement", "Kwh")
    #state.setattr("sensor.hydroquebec_07_days_ago.icon, "'mdi:flash'"")
    state.setattr("sensor.hydroquebec_07_days_ago.friendly_name", "Hydro Quebec History 7 Days Ago")
    two_days_ago = date.today() - timedelta(2)
    log.info(f"2 days before Current Date : {two_days_ago}")
    kwh2= state.get("sensor.hydroquebec_yesterday_total_consumption")
    kwh3= state.get("sensor.hydroquebec_02_days_ago")
    kwh4= state.get("sensor.hydroquebec_03_days_ago")
    kwh5= state.get("sensor.hydroquebec_04_days_ago")
    kwh6= state.get("sensor.hydroquebec_05_days_ago")
    kwh7= state.get("sensor.hydroquebec_06_days_ago")
    state.set("sensor.hydroquebec_02_days_ago", value=kwh2)
    state.set("sensor.hydroquebec_03_days_ago", value=kwh3)
    state.set("sensor.hydroquebec_04_days_ago", value=kwh4)
    state.set("sensor.hydroquebec_05_days_ago", value=kwh5)
    state.set("sensor.hydroquebec_06_days_ago", value=kwh6)
    state.set("sensor.hydroquebec_07_days_ago", value=kwh7)

    # Update the 7 days avg
    list = [kwh2,kwh3,kwh4,kwh5,kwh6,kwh7]
    total = 0

    for i in range(len(list)):
        total += float(list[i])
    avg = round(total/len(list),2)
    state.set("sensor.hydroquebec_07_avg", value=avg)
    state.setattr("sensor.hydroquebec_07_avg.unit_of_measurement", "Kwh")
    #state.setattr("sensor.hydroquebec_07_days_ago.icon, "mdi:flash"")
    state.setattr("sensor.hydroquebec_07_avg.friendly_name", "Hydro Quebec Avg 7 Days")