const temasRouter = require('./temas')
function indexRouter (app){
	app.use('/api/',temasRouter)
}
module.exports = indexRouter;
