const kafka = require('./kafkaConfig');
const consumer = kafka.consumer({ groupId: 'my-group' });

const consumeMessages = async () => {
  try {
    await consumer.connect();
    console.log('Consumer connected.');

    await consumer.subscribe({ topic: 'my-topic', fromBeginning: true });
    console.log('Subscribed to topic.');

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log(`Received message: ${message.value.toString()} from partition ${partition}`);
      },
    });
  } catch (error) {
    console.error('Error consuming message:', error);
  }
};

consumeMessages();
