# Scenes

Component: [scene](https://home-assistant.io/components/scene/)

None of these are used

## All lights off

Well, it's not really since it doesn't include the bedroom lights (deliberately), or the light for the house number. This as it says turns all the (other) lights off.

## Bedtime

This turns off the same set of lights, but also the TVs.

## Lounge lights

Two scenes, for on and off.

all_off.yaml
```
name: All off
entities:
  light.hall: off
  light.person1_bedroom_bedside: off
  light.master_bedroom_bedhead: off
  light.living_room_corner_lamp: off
  light.living_room_tv_lamp: off
  light.living_room_table_lamp: off
  switch.pi3_cabinet_light_switch: off
  switch.pi3_family_room_socket_switch: off
  switch.pi3_garden_lights_switch: off
  switch.pi3_hall_downstairs_switch: off
  switch.pi3_livingroom_socket_switch: off
```
