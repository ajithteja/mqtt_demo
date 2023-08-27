const express = require('express');
const app = express();
// const http = require('http').createServer(app);

const mqtt = require('mqtt');

// Create an MQTT client
const mqttClient = mqtt.connect('mqtt://localhost'); // Change to your MQTT broker URL

// MQTT client event handling
mqttClient.on('connect', () => {
  console.log('MQTT client connected');
  mqttClient.subscribe('myTopic'); // Change to your desired topic
});

mqttClient.on('message', (topic, message) => {
  console.log(`Received message on topic ${topic}: ${message.toString()}`);
});

// Express routes
app.get('/', (req, res) => {
  res.send('Hello MQTT!');
});

// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
