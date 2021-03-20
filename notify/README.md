# Notifiers

Components:
* [LaMetric component](https://home-assistant.io/components/notify.lametric/)
* [Pushover](https://home-assistant.io/components/notify.pushover/)
* [REST](https://www.home-assistant.io/components/notify.rest/)
* [Slack](https://home-assistant.io/components/notify.slack/)

## Adults

This is a simple group notifier, for things that I want to ensure somebody is aware of 

## Garage

This is for when we leave the garage doors open, a mass broadcast so we remember to close the thing


## Logfile

Sometimes it's been useful to spit things out to logs so I can see what's happening, I keep this around for that.

Also, any time you see a notification starting with `SEND`, for example `SENDME` then this comes into play. I monitor the file with [swatchdog](https://github.com/ToddAtkins/swatchdog) and pass anything starting with certain key phrases (including `SEND`) to a shell script. That shell script parses the notification, and can use [Home Assistant CLI](https://github.com/home-assistant-ecosystem/home-assistant-cli) to pull further information from Home Assistant, to decide what to do next. This gives me adaptive notifications, something that's hard to do within Home Assistant itself.

## People

Individual notifiers for different methods for different people. I'm using a combination of Pushover and REST currently.

## REST

For use with Discord, since I'm using Discord anyway. This will replace Slack, and probably Pushover

## Slack

Slack is being phased out
