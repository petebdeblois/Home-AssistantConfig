from datetime import date

@time_trigger("once(21:46:00)")
def summer_vacation():
    today = date.today()
    d = int(today.strftime("%d"))
    m = int(today.strftime("%m"))
    if d == 28 and m == 8:
        log.info('yes ' + str(d) + str(m))
    else:
        log.info('no ' + str(d) + str(m))
