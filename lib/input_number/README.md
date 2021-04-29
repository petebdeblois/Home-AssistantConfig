# Input numbers

Component: [input number](https://home-assistant.io/components/input_number/)

## Door delay

This is the delay after the garden door opens (in seconds) before the automation for turning the lights off is re-enabled.

## Garden time

Used to determine if the lights have been left on too long, in minutes.

## Lights

These are for the Yeelight control scripts, for changing the brightness and colour temperature
name: 'No brighter than this'
min: 50
max: 255
step: 1
mode: slider

name: 'No dimmer than this'
min: 1
max: 255
step: 1
mode: slider


## Room

This is for future lighting automations, not currently used.
