const passport = require('passport') 
const passportJwt = require('passport-jwt') 
const { Strategy, ExtractJwt } = passportJwt

const { API_SECRET } = require('../env/env.config.js')

module.exports = (app) => {

	const params = {
    secretOrKey: API_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  };

  const strategy = new Strategy(params, (payload, done) => {
    app.db('user').where({ id: payload.id })
      .select(['id', 'user_name', 'email', 'user_type'])
      .first()
      .then(user => done(null, user ? { ...payload } : false))
      .catch(err => done(err, false) )
  });

  passport.use(strategy);

  return {
    authenticate: () => 
      passport.authenticate('jwt', { session: false })
  };

}