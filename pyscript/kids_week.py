import datetime
@time_trigger("once(friday)")
def manage_kids_week():
    day = datetime.datetime.today().weekday()
    week = datetime.datetime.today().isocalendar()[1]
    if(week % 2 == 0):
    # call service turn on
        input_boolean.turn_off(entity_id='input_boolean.kids_week')
        log.info("KIDS WEEK => False")
    else:
    #call service turn off
        input_boolean.turn_on(entity_id='input_boolean.kids_week')
        log.info("KIDS WEEK => True")