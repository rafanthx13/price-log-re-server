module.exports = (app) => {

    app.get('/', (req, res) => {
        res.status(200).send('LogPriceServer is working v.knex.1.0.0!. Documentation in /swagger');;
    });

    // TODO colocar autorização em tudo


    //  app.config.passport.authenticate()
	app.use('/city', app.config.passport.authenticate(), app.controller.city);

    app.use('/shop', app.controller.shop);

    app.use('/product', app.controller.product);

    app.use('/log', app.controller.log);

    app.use('/user', app.controller.user);

    app.use('/product', app.controller.product);

    // Especifics

    app.post('/login', app.services.auth.signin)

    app.get('/auth', app.services.auth.authenticate)

	// nâo tem 'v1' na frente
	// app.use('/auth', app.routes.auth);

	// const protectedRouter = express.Router();

	// protectedRouter.use('/users', app.routes.users);
	// protectedRouter.use('/accounts', app.routes.accounts);
	// protectedRouter.use('/transactions', app.routes.transactions);
	// protectedRouter.use('/transfers', app.routes.transfers);
	// protectedRouter.use('/balances', app.routes.balances);

	// // Agora  vai tudo começar com '/v1' a versâo do meu app
	// // Acrescentei um midleware adicionao a essa srotas, passar pelo 'autenhticate'
	// app.use('/v1',	app.config.passport.authenticate(),
	// 	protectedRouter);

	// ----------------

	/*
	const admin = require('./admin')

module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.user.save))
        .get(admin(app.api.user.get))

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(admin(app.api.user.save))
        .get(admin(app.api.user.getById))
        .delete(admin(app.api.user.remove))

    app.route('/categories')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.category.get))
        .post(admin(app.api.category.save))

    // Cuidado com ordem! Tem que vir antes de /categories/:id
    app.route('/categories/tree')
        .all(app.config.passport.authenticate())
        .get(app.api.category.getTree)

    app.route('/categories/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.category.getById)
        .put(admin(app.api.category.save))
        .delete(admin(app.api.category.remove))

    app.route('/articles')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.article.get))
        .post(admin(app.api.article.save))

    app.route('/articles/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.article.getById)
        .put(admin(app.api.article.save))
        .delete(admin(app.api.article.remove))

    app.route('/categories/:id/articles')
        .all(app.config.passport.authenticate())
        .get(app.api.article.getByCategory)

    app.route('/stats')
        .all(app.config.passport.authenticate())
        .get(app.api.stat.get)
}
	*/
}