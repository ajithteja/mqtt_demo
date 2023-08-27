// const mqtt = require('mqtt');

// var client = mqtt.connect('mqtt:/broker.hivemq.com');

// client.on('connect', function () {
//   client.subscribe('PradeepKumar');
//   console.log('Client has subscribed successfully');
// });
// client.on('message', function (topic, message) {
//   console.log({ message });
//   console.log(message.toString());
// });

const mqtt = require('mqtt');

// Create an MQTT client
const mqttClient = mqtt.connect('mqtt://localhost'); // Change to your MQTT broker URL

mqttClient.on('connect', () => {
  console.log('Subscriber connected to MQTT broker');

  // Subscribe to the desired topic
  mqttClient.subscribe('myTopic/1', (err) => {
    if (err) {
      console.error('Error subscribing to topic:', err);
    } else {
      console.log('Subscribed to topic');
    }
  });
});

mqttClient.on('message', (topic, message) => {
  console.log(`Received message on topic ${topic}: ${message.toString()}`);
  const listOfObjects = JSON.parse(message.toString());
  console.log('List of objects:', listOfObjects);
});
