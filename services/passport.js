const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys')

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then((existingUser) => {
            done(null, existingUser);
        })
});

passport.use(
    new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: 'https://tranquil-ocean-00612.herokuapp.com/auth/google/callback',
    proxy: true
    }, (accessToken, refreshToken, profile, done)=> {
        User.findOne({ googleId: profile.id})
            .then((existingUser) => {
                if (existingUser) {
                    // User Already Exists
                    done(null, existingUser);
                } else {
                    // No User Record
                    new User({ googleId: profile.id })
                        .save()
                        .then(savedUser => done(null, savedUser));
                }
            })
    })
);