'''
Created a script to keep track summer vacation. This will be usueful for automation based on school days
'''
from datetime import date
state.persist('pyscript.school_summer_vacation')
@time_trigger("once(08:06:50)")
def summer_vacation():
    log.debug("yeah")
    today = date.today()
    d = int(today.strftime("%d"))
    m = int(today.strftime("%m"))
    if d == 28 and m == 8:
      log.info('yes')
      state.set("input_boolean.school_summer_vacation", value="off")
    elif d == 23 and m == 6:
      log.info('no')
      state.set("input_boolean.school_summer_vacation", value="on")
