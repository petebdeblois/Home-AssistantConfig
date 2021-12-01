import datetime


#@time_trigger("once(17:52:30)")
@time_trigger("cron(05 */1 * * *)")
def market_state():
  now = datetime.datetime.now()
  print(now.year, now.month, now.day, now.hour, now.minute, now.second)
  hour = now.hour
  log.warning(hour)
  if hour == 9:
    state.set("binary_sensor.market_state", value='on')
  elif hour == 16:
    state.set("binary_sensor.market_state", value='off')
  else:
    pass

