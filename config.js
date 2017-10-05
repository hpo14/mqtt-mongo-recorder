var config = {};

config.debug = process.env.DEBUG || false;

config.mqtt  = {};
config.mqtt.topic     = process.env.MQTT_TOPIC     || 'bigbear/guest/alpha/beta';
config.mqtt.hostname  = process.env.MQTT_HOSTNAME  || 'iot.eclipse.org';
config.mqtt.port      = process.env.MQTT_PORT      || 1883;

config.mongodb = {};
config.mongodb.hostname   = process.env.MONGODB_HOSTNAME   || 'localhost';
config.mongodb.port       = process.env.MONGODB_PORT       || 27017;
config.mongodb.database   = process.env.MONGODB_DATABASE   || 'mqtt';
config.mongodb.collection = process.env.MONGODB_COLLECTION || 'message';

module.exports = config;
