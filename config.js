var config = {};

config.debug = process.env.DEBUG || false;

config.mqtt  = {};
config.mqtt.topic     = process.env.MQTT_TOPIC     || 'bigbear/guest/alpha/beta';
config.mqtt.hostname  = process.env.MQTT_HOSTNAME  || 'iot.eclipse.org';
config.mqtt.port      = process.env.MQTT_PORT      || 1883;

config.mongodb = {};
config.mongodb.hostname   = process.env.MYMONGO_SERVICE_HOST    || 'localhost';
config.mongodb.port       = process.env.MYMONGO_SERVICE_PORT    || 27017;
config.mongodb.database   = process.env.MONGODB_DATABASE        || 'dbmqtt';
config.mongodb.collection = process.env.MONGODB_COLLECTION      || 'message';
config.mongodb.user = process.env.MONGODB_USER;
config.mongodb.password = process.env.MONGODB_PASSWORD;

module.exports = config;
