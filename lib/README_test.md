

## <a name="hubs">Hubs</a>

| [Go to Menu](#menu) |

| Device  | Quantity | Connection | Home Assistant | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| [Hue Hub v2](https://amzn.to/2IpNA3G)| 1 | Ethernet | [Philips Hue](https://www.home-assistant.io/components/hue/) | Used to control all Zigbee smart bulbs |
| [Lutron Smart Bridge 2 Pro](https://amzn.to/2WLpKEF)| 1 | Ethernet | [Lutron Caseta Pro](https://github.com/upsert/lutron-caseta-pro) (Custom Component)| Controls Lutron Caseta light switches, dimmers, and Pico remotes |
| [Vera Plus](https://amzn.to/2IJGx4M)| 1 | Ethernet | [Vera](https://www.home-assistant.io/components/vera/) | Used as a dumb hub to connect Z-Wave devices.|
| [IKEA TRÅDFRI](https://www.ikea.com/us/en/p/tradfri-gateway-white-00337813/)| 1 | Ethernet | [IKEA TRÅDFRI](https://www.home-assistant.io/integrations/tradfri/) | Currently only used to support the IKEA line of blinds |



Relevant hub configurations can be found within [configuration.yaml](https://github.com/geekofweek/homeassistant/blob/master/configuration.yaml)

## <a name="lighting">Lighting</a>

| [Go to Menu](#menu) | [Home Screenshot](images/home-screenshot.jpg?raw=true "Home Page") |

| Device  | Quantity | Connection | Home Assistant | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| [Philips Hue White and Color Ambiance](https://amzn.to/2Ip8waU) | 9 | Ethernet | [Philips Hue Light](https://www.home-assistant.io/components/light.hue/) | Color changing smart bulbs|




Lights are grouped via [light.yaml](https://github.com/geekofweek/homeassistant/blob/master/light_group.yaml)

## <a name="climate">Climate</a>

| [Go to Menu](#menu) | [Weather Screenshot](images/weather-screenshot.jpg?raw=true "Weather") |

| Device  | Quantity | Connection | Home Assistant | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| [Ecobee 3](https://amzn.to/2L72d9A) | 1 | Wi-Fi | [ecobee](https://www.home-assistant.io/components/ecobee/) / [Ecobee Thermostat](https://www.home-assistant.io/components/climate.ecobee/) | Used as primary thermostat |
| [Ecobee Room Sensor](https://amzn.to/2L9cORm) | 9 | Ecobee3 | [Ecobee Binary Sensor](https://www.home-assistant.io/components/binary_sensor.ecobee/) | Provides room temperature and room occupancy.|
| [Dyson Pure Hot + Cool Link](https://amzn.to/2RQjDtR) | 1 | Wi-Fi | [Dyson](https://github.com/shenxn/ha-dyson/) (Custom Component) | Dyson Fan with Heater and Air Purifier|
| [Temp Sensor Probe DS18b20](https://amzn.to/3bx9RGF) | 1 | [4 Relay ESP32](https://amzn.to/3abd0vG) | [ESPHome](https://www.home-assistant.io/integrations/esphome/) | Waterproof Temperature sensor, connected directly to ESPHome module |

I utilize a number of automations that adjust climate controls.  Mostly they can be found in [climate.yaml](https://github.com/geekofweek/homeassistant/blob/master/automation/climate.yaml). Ecobee room sensors are heavily used in [occupancy.yaml](https://github.com/geekofweek/homeassistant/blob/master/automation/occupancy.yaml) and as conditions in many automations


## <a name="outlets">Outlets & Switches</a>

| [Go to Menu](#menu) | [Home Screenshot](images/home-screenshot.jpg?raw=true "Home Page") |

| Device  | Quantity | Connection | Home Assistant | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| [Wemo Mini Smart Plug](https://amzn.to/2wQ05jE) | 4 | Wi-Fi | [Belkin WeMo](https://www.home-assistant.io/components/wemo/) | Smart outlets utilized to control various devices via powering the outlet on/off (fans, Christmas Tree, etc) |
| [Wemo Insight Smart Plug](https://amzn.to/2CfzHRa) | 2 | Wi-Fi | [Belkin WeMo](https://www.home-assistant.io/components/wemo/) | Smart outlet utilized to monitor power to washing machine and dryer|
| [Zooz Power Switch ZEN15](https://amzn.to/2WRPeiv) | 2 | Vera Plus (Z-Wave) | [Vera Switch](https://www.home-assistant.io/components/vera/) | Smart outlet utilized to monitor power to sump pump |
| [GE Z-Wave Wireless Smart Lighting Control Outdoor Module](https://amzn.to/2KuFRxN) | 4 | Vera Plus (Z-Wave)| [Vera Switch](https://www.home-assistant.io/components/vera/) | Used to control low voltage outdoor lighting transformers, bug zapper, and Christmas lights (Holiday time only) |
| [Remotec Zwave Dry Contact Fixture Module](https://amzn.to/2rOmcBW) | 1 | Vera Plus (Z-Wave)| [Vera Switch](https://www.home-assistant.io/components/vera/) | Used to control gas fireplace |
| [Dome Home Automation Water Shut-Off Valve](https://amzn.to/2IzJR1J) | 1 | Vera Plus (Z-Wave)| [Vera Switch](https://www.home-assistant.io/components/vera/) | Used to shut off Water Main Supply to House in the event of water leak detected or while on Vacation |


Switches and outlets are used in various capacities, some are for lighting and some are for fans type devices.  [lights.yaml](https://github.com/geekofweek/homeassistant/blob/master/automation/lights.yaml) and [occupancy.yaml](https://github.com/geekofweek/homeassistant/blob/master/automation/occupancy.yaml) should have some good examples.

Washing machine is automated around the Wemo Insight Plug.  This outlet can monitor power consumption, I created a [sensor](https://github.com/geekofweek/homeassistant/blob/master/sensors.yaml) based on the power reading that shows a simple status of running or not running thus [automating](https://github.com/geekofweek/homeassistant/blob/master/automation/laundry.yaml) around that sensor.

## <a name="locks">Locks</a>

| [Go to Menu](#menu) | [Alarm Screenshot](images/alarm-screenshot.jpg?raw=true "Alarm") |

| Device  | Quantity | Connection | Home Assistant | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| [Schlage Connect Touchscreen Deadbolt](https://amzn.to/2KwXltd) | 3 | Vera Plus (Z-Wave) | [Vera Lock](https://www.home-assistant.io/components/vera/) | Smart locks used in automations to auto lock / unlock doors |

Locks are used mostly as a way to lock / unlock doors based on locations, see [location.yaml](https://github.com/geekofweek/homeassistant/blob/master/automation/location.yaml) and [locks.yaml](https://github.com/geekofweek/homeassistant/blob/master/automation/locks.yaml) for some examples

## <a name="security">Security</a>

| [Go to Menu](#menu) | [Alarm Screenshot](images/alarm-screenshot.jpg?raw=true "Alarm") |

| Device  | Quantity | Connection | Home Assistant | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| [GoControl Door/Window Sensor](https://amzn.to/2wOhLfn) | 3 | Vera Plus (Z-Wave) | [Vera Binary Sensor](https://www.home-assistant.io/components/vera/) | Door sensors to detect if exterior doors have been opened / closed |


Door sensors, motion sensors, and the alarm siren are used in many different ways via [alarm.yaml](https://github.com/geekofweek/homeassistant/blob/master/automation/alarm.yaml).  I've also implemented some of the alarm functions as part of [water_sensors.yaml](https://github.com/geekofweek/homeassistant/blob/master/automation/water_sensors.yaml).

## <a name="voice">Voice Assistant</a>

| [Go to Menu](#menu) |

| Device  | Quantity | Connection | Home Assistant | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| [Amazon Echo](https://amzn.to/2KuPHjd) | 1 | Wi-Fi | [Home Assistant Cloud](https://www.home-assistant.io/cloud/) | Audio only Voice Assistant |


I go for native Echo integration wherever possible, but a few devices are not currently supported where I've had to implement some work arounds via Home Assistant Cloud (previously Emulated Hue).  Most of these are just exposed via an [input_boolean]( https://github.com/geekofweek/homeassistant/blob/master/input_boolean.yaml) and [customize.yaml]( https://github.com/geekofweek/homeassistant/blob/master/customize.yaml).  This allows the ability to have echo turn on or off an [input_boolean]( https://github.com/geekofweek/homeassistant/blob/master/input_boolean.yaml)  in turn triggering an automation.

## <a name="media">Media</a>

| [Go to Menu](#menu) | [Media Screenshot](images/media-screenshot.jpg?raw=true "Media") |

| Device  | Quantity | Connection | Home Assistant | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| [Apple TV 4k](https://www.amazon.com/Apple-MQD22LL-A-TV-4K/dp/B075NCMLYL/ref=sr_1_2?ie=UTF8&qid=1526581374&sr=8-2&keywords=Apple+TV) | 4 | Wi-Fi | [Apple TV](https://www.home-assistant.io/components/apple_tv/) | Used for media playback on 4k TVs |
| [Plex Media Server](https://plex.tv) | 1 | Ethernet | [Plex](https://www.home-assistant.io/components/media_player.plex) / [Plex Activity Monitor](https://www.home-assistant.io/components/sensor.plex/) |  Media Server|  

Most media player based automations can be found in [media.yaml]( https://github.com/geekofweek/homeassistant/blob/master/automation/media.yaml) and some Text to Speech (TTS) based automation in various automations.

Harmony Hubs work via a combination of [input_selects]( https://github.com/geekofweek/homeassistant/blob/master/input_select.yaml), [scripts]( https://github.com/geekofweek/homeassistant/blob/master/scripts.yaml), and automations in [media.yaml]( https://github.com/geekofweek/homeassistant/blob/master/automation/media.yaml).

## <a name="sensors">Sensors</a>

| [Go to Menu](#menu) | [System Screenshot](images/system-screenshot.jpg?raw=true "System") |

| Device  | Quantity | Connection | Home Assistant | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| [Nest Protect v2 Battery](https://amzn.to/2LJ0ACn) | 6 | Wi-Fi | [Nest](https://www.home-assistant.io/components/nest/) | Smoke Alarm and CO Alarm.  I realized most of my Smoke Alarms had long suprased the 10 year mark and it was time for some replacements. I usually avoid Google owned products for various reasons, but the Nest Protect line has high praise. |
| [Dome Motion Detector - Light Sensor](https://amzn.to/2W9TMDS) | 8 | Vera Plus (Z-Wave) | [Vera Binary Sensor](https://www.home-assistant.io/components/vera/) | Motion and Light Level sensor used to automate around motion events and current room brightness. |
| [GoControl PIR Motion Detector](https://amzn.to/2HCvyZJ) | 1 | Vera Plus (Z-Wave) | [Vera Binary Sensor](https://www.home-assistant.io/components/vera/) | Motion sensor used to automate around motion events. |
| [ZOOZ 4-in-1 Sensor ZSE40](https://amzn.to/3aTqGhZ) | 4 | Vera Plus (Z-Wave) | [Vera Binary Sensor](https://www.home-assistant.io/components/vera/) | Motion,temperature, humidity, and light level sensor used to automate around motion events. |
| [Dome Home Automation Leak Sensor](https://amzn.to/2IA5XBj) | 8 | Vera Plus (Z-Wave) | [Vera Binary Sensor](https://www.home-assistant.io/components/vera/) | Water sensors used to detect the pressence of water as a preventive measure |
| [Aeon Labs Water Sensor](https://amzn.to/2rM6KFE) | 2 | Vera Plus (Z-Wave) | [Vera Binary Sensor](https://www.home-assistant.io/components/vera/) | Water sensors used to detect the pressence of water as a preventive measure |
| [Ecolink Door/Window Sensor](https://amzn.to/3cCjhUU) | 2 | Vera Plus (Z-Wave) | [Vera Binary Sensor](https://www.home-assistant.io/components/vera/) | Trial run on Window sensors to stop my blinds from closing when a Window is Open.  Starting small but we all know how that will end up.  ALL THE WINDOWS! |

Water sensors serve one major function, to alert me to the presence of water.  Almost all of those automations can be fond via [water_works.yaml]( https://github.com/geekofweek/homeassistant/blob/master/automation/water_works.yaml)

Smoke detectors, like the water sensors, have one real function to alert me of smoke or CO2.  Almost all of those automations can be fond via [smoke_alarm.yaml](https://github.com/geekofweek/homeassistant/blob/master/automation/smoke_alarm.yaml)



## <a name="garage">Garage</a>

| [Go to Menu](#menu) | [Garage Screenshot](images/garage-screenshot.jpg?raw=true "Location") |

| Device  | Quantity | Connection | Home Assistant | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| [4 Relay ESP32](https://amzn.to/3abd0vG) | 1 | Wi-Fi | [ESPHome](https://www.home-assistant.io/integrations/esphome/)| Automated to open / close garage door on location and auto close after specific time intervals |


Similar to locks, the Garage door is mostly automated to open / close based on location and after a set amount of time.  Examples can be found in [location.yaml]( https://github.com/geekofweek/homeassistant/blob/master/automation/location.yaml) and [garage.yaml]( https://github.com/geekofweek/homeassistant/blob/master/automation/garage.yaml)

More detailed information on the ESPhome configuration can be found in [here](https://github.com/geekofweek/homeassistant/tree/master/esphome/garage_door_relay)

## <a name="vacuum">Vacuum</a>

| [Go to Menu](#menu) | [Home Screenshot](images/home-screenshot.jpg?raw=true "Home Page") |

| Device  | Quantity | Connection | Home Assistant | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| [iRobot i7+](https://amzn.to/3f3rksO) | 1 | Wi-Fi | [iRobot Roomba](https://www.home-assistant.io/components/vacuum.roomba/)| Automated to run at specific times based on presence detection |
| [iRobot Roomba 980](https://amzn.to/2L9q1tm) | 2 | Wi-Fi | [iRobot Roomba](https://www.home-assistant.io/components/vacuum.roomba/)| Automated to run at specific times based on presence detection |
| [iRobot Braava jet 240](https://amzn.to/2FRJnEa) | 1 | Bluetooth | NA | Currently not integrated into Home Assistant. Unknown if this can ever be automated |

All Roomba related automations can be found in [roomba.yaml]( https://github.com/geekofweek/homeassistant/blob/master/automation/roomba.yaml)

## <a name="blinds">Blinds</a>

| [Go to Menu](#menu) | [Home Screenshot](images/home-screenshot.jpg?raw=true "Home Page") |

| Device  | Quantity | Connection | Home Assistant | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| [Ikea FYRTUR](https://www.ikea.com/us/en/cat/electric-blinds-44531/) | 10 | Zigbee | [IKEA TRÅDFRI](https://www.home-assistant.io/integrations/tradfri/)| Automated to open and close blinds based on motion, location, and sun elevation |

All Blinds related automations can be found in [blinds.yaml]( https://github.com/geekofweek/homeassistant/blob/master/automation/blinds.yaml)

## <a name="appliances">Appliances</a>

| [Go to Menu](#menu) | [Basement Screenshot](images/basement-screenshot.jpg?raw=true "Home Page") |

| Device  | Quantity | Connection | Home Assistant | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| [LG Washer WT7300CW](https://www.lg.com/us/washers/lg-WT7300CW-top-load-washer) | 1 | Wi-Fi | [LG ThinQ](https://github.com/ollo69/ha-smartthinq-washer)| Automated for notifications and remaining run time.  Currently using a custom component for testing purposes |
| [LG Dryer DLGX7801WE](https://www.lg.com/us/dryers/lg-DLGX7801WE-gas-dryer) | 1 | Wi-Fi | [LG ThinQ](https://github.com/ollo69/ha-smartthinq-washer)| Automated for notifications and remaining run time. Currently using a custom component for testing purposes |

All laundry related automations can be found in [laundry.yaml]( https://github.com/geekofweek/homeassistant/blob/master/automation/laundry.yaml)

## <a name="network">Network</a>

| [Go to Menu](#menu) | [System Screenshot](images/system-screenshot.jpg?raw=true "System") |

| Device  | Quantity | Connection | Home Assistant | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| [Ubiquiti UniFi Cloud Key Gen2 Plus](https://amzn.to/2RUxtz1) | 1 | Ethernet | [Ubiquiti Unifi](https://www.home-assistant.io/components/device_tracker.unifi/) | Unifi Controller. Presence detection for non household members and devices |



Since I don’t use the network equipment as my primary presence detection method most of the automation is around house guests via [house_guest.yaml]( https://github.com/geekofweek/homeassistant/blob/master/automation/house_guest.yaml).  The main function of the network equipment is to be network equipment for my fiber internet service.

## <a name="other">Other Hardware</a>

| [Go to Menu](#menu) | [System Screenshot](images/system-screenshot.jpg?raw=true "System") |

| Device  | Quantity | Connection | Home Assistant | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| [Intel NUC NUC8i5BEH](https://amzn.to/2GxgStD) | 1 | Ethernet | NA | Primary Linux server. Docker Containers and Plex media server run off this device. |

| [HP OfficeJet Pro 8025](https://amzn.to/3bRP3vv) | 1 | Wi-Fi | [Internet Printing Protocol (IPP)](https://www.home-assistant.io/integrations/ipp/)| Regualr inkjet printer that works whenever it feels like because it's a printer. |


## <a name="software">Software</a>

| [Go to Menu](#menu) |

| Device  | Quantity | Connection | Home Assistant | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| [iOS App](https://itunes.apple.com/us/app/home-assistant-open-source-home-automation/id1099568401?mt=8) | 2 | NA | [iOS](https://www.home-assistant.io/docs/ecosystem/ios/)| Used as Home Assistant interface on mobile devices and primary method of presence detection. |
| [Locative iOS App](https://itunes.apple.com/us/app/locative/id725198453?mt=8) | 2 | NA | [Locative](https://www.home-assistant.io/components/device_tracker.locative/) | Brought out of retirement and used in conjunction with native iOS app via [person integration](https://www.home-assistant.io/integrations/person/) |
| [Docker](https://www.docker.com) | 1 | Ethernet | [Installation on Docker](https://www.home-assistant.io/docs/installation/docker/) | Home Assistant install runs as a Docker Container |
| [Pi-hole](https://pi-hole.net) | 2 | Ethernet / Wi-Fi | [Pi-Hole Sensor](https://www.home-assistant.io/components/sensor.pi_hole/) | Ad blocking. Primary instance runs within a Docker container and the secondary runs on a [Raspberry-pi Zero W](https://amzn.to/2Kwcz1S) |


The iOS app is used for some notifications within various automations. The native iOS app is the main method of doing any location based automations via [location.yaml]( https://github.com/geekofweek/homeassistant/blob/master/automation/location.yaml) and many of the conditions I use are based on presence detection of household members.



## <a name="retired">Retired</a>

| [Go to Menu](#menu) |

| Device  | Quantity | Connection | Home Assistant | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| [Wink Hub v1](https://amzn.to/2wMUjis)| 1 | Wi-Fi | [Wink](https://www.home-assistant.io/components/wink/) | ~~Semi retired, using it as a z-wave repeater for Vera.~~ Once upon a time I really loved Wink, but when you don't stock hardware for almost a year and your buisness model is selling hardware... time for that slow ride to the Cloud API in the sky. Not to mention the massive outages when staff clock out and don't fix until morning (forget to renew an expired certificate anyone). It was a fun ride Wink, hopefully your death will not be to slow and painful, but i.am+ wants to watch the world burn... probably.|


| [Go to Menu](#menu) |



