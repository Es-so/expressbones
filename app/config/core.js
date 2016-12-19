exports.node_env    = process.env.node_env || 'developpement';
exports.title       = 'ExpressBones';
exports.port        = process.env.port     || 3000
exports.dburl       = process.env.dburl    || 'mongodb://codinglab.io:27017/expressbones';
exports.session		= 
{
	secret: 'such secret, much wow, marvellous',
	saveUninitialized: true,
	resave: false,
	//store: MemoryStore,      //please consider changing the store, MemoryStore is not good for production
	cookie : { httpOnly: true, maxAge: 2419200000 }
};