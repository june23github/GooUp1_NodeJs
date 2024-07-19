const kafka = require('./kafkaConfig');
const producer = kafka.producer();

const produceMessage = async () => {
  try {
    await producer.connect();
    console.log('Producer connected.');

    await producer.send({
      topic: 'my-topic',
      messages: [
        { key: 'user_id_123', value: 'Hello KafkaJS!' },
        { key: 'user_id_456', value: 'Another message' }
      ],
    });
    console.log('Message sent.');

    await producer.disconnect();
    console.log('Producer disconnected.');
  } catch (error) {
    console.error('Error producing message:', error);
  }
};

produceMessage();
