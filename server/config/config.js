var config = {
	port: process.env.PORT || 2000,
	db: process.env.MONGOLAB_URI || "mongodb://localhost/todoapi",
	test_port: 3000,
	test_db: "mongodb://heroku_h4b5g9nj:5uonj9efjhacsoirr0630ql6bj@ds331758.mlab.com:31758/heroku_h4b5g9nj"
}
module.exports = config;