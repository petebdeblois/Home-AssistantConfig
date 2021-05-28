from datetime import datetime, timedelta, date

"""
Time test script 
"""
@time_trigger("once(14:15:30)")
def update_history_hydro():
    """Trigger at 5:15pm every test example using pyscript."""
    state.setattr("sensor.hydroquebec_two_days_ago.unit_of_measurement", "Kwh")
    state.setattr("sensor.hydroquebec_two_days_ago.icon:, "mdi:flash"")
    state.setattr("sensor.hydroquebec_two_days_ago.friendly_name", "Hydro Quebec History 2 Days Ago")
    two_days_ago = date.today() - timedelta(2)
    log.info(f"2 days before Current Date : {two_days_ago}")
    kwh2= state.get("sensor.hydroquebec_yesterday_total_consumption")
    state.set("sensor.hydroquebec_two_days_ago", value=kwh2)