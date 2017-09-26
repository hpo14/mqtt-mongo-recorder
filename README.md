Welcome to mqtt-mongo-recorder
===================

This NodeJS application listens to MQTT messages and records them to MongoDB.

This fork was designed for running on Cloud Foundry.

MQTT host is specified by a bound MQTT host named "mymqtt"
Mongo host is specified by a bound MongoDB host named "mymongo"

Example
=======

Clone the repository
$ git clone https://github.com/nieleyde/mqtt-mongo-recorder.git
$ cd mqtt-mongo-recorder
$ cf push


