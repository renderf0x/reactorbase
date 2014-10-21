//basic global config

module.exports = {
	db_url: (process.env.MONGO_URL || 'mongodb://localhost:27017/hackertest'),
	listen_port: '3000'
}