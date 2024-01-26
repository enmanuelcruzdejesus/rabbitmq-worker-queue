var amqp = require('amqplib/callback_api');
let queue = 'task_queue';
amqp.connect('amqps://rwmvcrnc:UHUg70ea2vdPt6h69IN9O0c4D9bFRUrr@shrimp.rmq.cloudamqp.com/rwmvcrnc', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
   

    channel.assertQueue(queue, {
      durable: false
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    channel.consume(queue, function(msg) {
      console.log(" [x] Received %s", msg.content.toString());
    }, {
        noAck: true
      });
  });
});

