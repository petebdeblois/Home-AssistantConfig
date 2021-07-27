"""
Time test script 
"""
@time_trigger("once(10:47:00)")
def time_trigger_test():
    """Trigger at 5:15pm every test example using pyscript."""
    log.info(f"Time Trigger test:")
