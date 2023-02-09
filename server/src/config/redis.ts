import redis from "ioredis";

export const client = new redis({
	host: "redis-server",
	port: 6379,
});


// host: "redis-server",
// port: 6379,
client.on("error", (err) => {
	console.log("Error " + err);
});
