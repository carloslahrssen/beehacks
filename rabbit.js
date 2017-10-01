const amqp = require('amqp');
const rabbit = amqp.createConnection({ 
	host: 'mosquito.rmq.cloudamqp.com', //'FL1CPSALESFAP02', 
	login: 'fqwvdgit',
	password: 'rCssr0gy8oGEa9Rt0SmxH7xtaqiYJlFO',
	vhost: 'fqwvdgit'
});

rabbit.on('error', e => console.log("Error from amqp: ", e));

module.exports = rabbit;