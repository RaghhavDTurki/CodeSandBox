import redis from 'ioredis'

export const client = new redis();

client.on('error', (err) => {
	console.log("Error " + err)
});
