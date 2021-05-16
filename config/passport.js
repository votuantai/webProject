const JWTStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../model/User')
const keys = require('./keys')


const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.secret
}

module.exports = passport => {
    passport.use(
        new JWTStrategy(opts, (jwt_payload, done) => {
            User.findById(jwt_payload._id).then(user => {
                if (user) return done(null, user)
                return done(null, false)
            }).catch(err => {
                console.log(err)
            })
        })
    )
}