var amqp = require('amqplib/callback_api');

let queue = 'task_queue';
let msg = process.argv.slice(2).join(' ') || 'Hello World';



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

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
    setTimeout(function() {
      connection.close();
      process.exit(0)
      }, 500);
  });
});

