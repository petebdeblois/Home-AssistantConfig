"""
Service script
"""
@service
def test():
    if binary_sensor.workday_sensor == 'on':
        log.info(f"Service Trigger test: fail")
        pass
    else:
        log.info(f"Service Trigger test: pass")
        pass
