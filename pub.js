// const mqtt = require('mqtt');

// var client = mqtt.connect('mqtt://broker.hivemq.com');

// client.on('connect', function () {
//   setInterval(function () {
//     var random = Math.random() * 50;
//     console.log('random', random);
//     if (random < 30) {
//       client.publish(
//         'PradeepKumar',
//         'Simple MQTT using hiveq:' + random.toString() + '.'
//       );
//     }
//   }),
//     30000;
// });

const mqtt = require('mqtt');

// Create an MQTT client
const mqttClient = mqtt.connect('mqtt://localhost'); // Change to your MQTT broker URL

mqttClient.on('connect', () => {
  console.log('Publisher connected to MQTT broker');

  // Define the list of objects to publish
  const listOfObjects = [
    { id: 1, name: 'Object 1' },
    { id: 2, name: 'Object 2' },
    { id: 3, name: 'Object 3' },
  ];

  // Publish the list of objects as a JSON string
  mqttClient.publish('myTopic/1', JSON.stringify(listOfObjects), (err) => {
    if (err) {
      console.error('Error publishing message:', err);
    } else {
      console.log('Message published successfully');
    }

    mqttClient.end();
    // Close the MQTT connection
  });
});
