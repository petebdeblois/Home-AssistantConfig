#!/bin/bash

# Only edit the following setup lines with correct login information

# Mosquitto Broker Details

mqttuser=mqttuserhome
mqttpassword=g8G5%pJ5n
mqttbroker=192.168.2.65
mqttport=1883

# DO NOT ALTER ANYTHING BELOW THIS LINE

speedtest_result=$(speedtest --format=json --accept-license)
echo "**********************************************************************************************"
echo $speedtest_result

download=$(echo "$speedtest_result" | jq '.download."bandwidth"')
upload=$(echo "$speedtest_result" | jq '.upload."bandwidth"')
ping_server=$(echo "$speedtest_result" | jq '.ping."latency"')
url_test=$(echo "$speedtest_result" | jq '.result."url"' | tr -d \")
time_run=$(echo "$speedtest_result" | jq '.timestamp' | tr -d \")
echo $download $upload $ping_server $time_run
echo $url_test

download=$(printf %.2f "$((10**3 * $download*8/10**6))e-3")
upload=$(printf %.2f "$((10**3 * $upload*8/10**6))e-3")
ping_server=$(printf %.3f "$ping_server")
echo $download $upload $ping_server $time_run
echo $url_test

speedteststring='{"state":"'"$url_test"'","attributes":{"time_run":"'"$time_run"'","ping":"'"$ping_server"'","download":"'"$download"'","upload":"'"$upload"'"}}'
echo $speedteststring
echo "**********************************************************************************************"

# Publish to MQTT Broker

mosquitto_pub -h $mqttbroker -p $mqttport -u "$mqttuser" -P "$mqttpassword" -t speedtestresult -m "$speedteststring" -r