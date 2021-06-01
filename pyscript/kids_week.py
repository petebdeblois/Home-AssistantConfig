import datetime
@time_trigger("once(friday)")
def manage_kids_week():
day = datetime.datetime.today().weekday()
week = datetime.datetime.today().isocalendar()[1]
if(week % 2 == 0):
    # call service turn on
    print(True)
else:
    #call service turn off
    print(False)