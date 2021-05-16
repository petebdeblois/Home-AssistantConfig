![GitHub last commit](https://img.shields.io/github/last-commit/petebdeblois/Home-AssistantConfig)
[![HA Version](https://img.shields.io/badge/Running%20Home%20Assistant-2021.5.1%20-darkblue)](https://github.com/home-assistant/home-assistant/releases/latest)
![Travis (.org)](https://img.shields.io/travis/petebdeblois/Home-AssistantConfig)



# Overview
My personal [Home Assistant Container](https://home-assistant.io) configurations

# <a name="menu">Menu</a>
 | [Hubs](#hubs) | [Lighting](#lighting) | [Climate](#climate)| [Outlets & Switches](#outlets)|  [Locks](#locks) | [Security](#security) | [Voice Assistant](#voice) | [Media](#media) | [Sensors](#sensors) | [Cameras](#cameras) | [Garage](#garage) | [Vacuum](#vacuum) | [Blinds](#blinds) | [Appliances](#appliances) | [Network](#network) | [Other Hardware](#other)| [Software](#software) | [Retired Devices](#retired)  | 

## <a name="hubs">Hubs</a>

| [Go to Menu](#menu) |

| Device  | Quantity | Connection | Home Assistant | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| |  |  |  |  |

## <a name="lighting">Lighting</a>

| [Go to Menu](#menu) | 

| Device  | Quantity | Connection | Home Assistant | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| [Globe Electrics A19 LED Light Smart Bulb 10 W](https://www.canac.ca/fr/ampoule-intelligente-del-a19-10-w-paquet-de-2-4201085) | 2 | Wifi | [Tuya](https://www.home-assistant.io/integrations/tuya/) | Color changing smart bulbs|

Lights are grouped via [light.yaml](https://github.com/petebdeblois/Home-AssistantConfig/blob/master/lib/light.yaml)

## <a name="outlets">Outlets & Switches</a>

| [Go to Menu](#menu) | 

| Device  | Quantity | Connection | Home Assistant | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| [Globe Electrics Wifi Switch](https://www.canac.ca/fr/prise-intelligente-wifi-4201063) | 1 | Wi-Fi | [Tuya](https://www.home-assistant.io/integrations/tuya/)  |  |

## <a name="media">Media</a>

| [Go to Menu](#menu) |  

| Device  | Quantity | Connection | Home Assistant | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| [Plex Media Server](https://plex.tv) | 1 | Ethernet | [Plex](https://www.home-assistant.io/components/media_player.plex) / [Plex Activity Monitor](https://www.home-assistant.io/components/sensor.plex/) |  Media Server|  

## <a name="media">Arduino Related</a>

| [Go to Menu](#menu) |  

| Device  | Quantity | Connection | Home Assistant | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| [Wemos D1 Mini Pro]() | 3 | Wifi | [ESPHome](https://esphome.io/guides/getting_started_hassio.html) |  ESP8266 | 
| [Temperature Sensor]() | 3 | Wifi | [ESPHome](https://esphome.io/guides/getting_started_hassio.html) |  BME280 |
| [Soil Humidity Sensor]() | 1 | Wifi | [ESPHome](https://esphome.io/guides/getting_started_hassio.html) |  BME280 | 

## <a name="voice">Voice Assistant</a>

| [Go to Menu](#menu) |

| Device  | Quantity | Connection | Home Assistant | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| [GoogleHome Mini]() | 4 | Wi-Fi | [Home Assistant Cloud](https://www.home-assistant.io/cloud/) | Audio only Voice Assistant |

