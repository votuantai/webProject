const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const key = require('../../config/keys').secret
const passport = require('passport')
const User = require('../../model/User')

router.post('/register', (req, res) => {
    let {
        name,
        username,
        email,
        password,
        confirm_password,
        department
    } = req.body
    if (password != confirm_password) {
        return res.status(400).json({
            msg: "Password do not match."
        })
    }
    // Check for the unique username
    User.findOne({
        username: username
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "Username is already taken."
            })
        }
    })

    //Check for the unique email
    User.findOne({
        email: email
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "Email is already registered. Did you forgot your password"
            })
        }
    })

    //The data is valid and new we can register the user
    let newUser = new User({
        name,
        username,
        email,
        password,
        department
    })

    //Hash the password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash
            newUser.save().then(user => {
                return res.status(200).json({
                    success: true,
                    msg: 'Hurry! User is now registered'
                })
            })
        })
    })
})

router.post('/login', (req, res) => {
    User.findOne({
        username: req.body.username
    }).then(async(user) => {
        if (!user) {
            return res.status(404).json({
                msg: "Username is not found.",
                success: false
            })
        }
        // If there is user we are now going to compare the password
        const isMatch = await bcrypt.compareSync(req.body.password, user.password)
        if (isMatch) {
            //User's password is correct and we need to send the JSON Token for that user
            const payload = {
                _id: user._id,
                username: user.username,
                name: user.name,
                email: user.email
            }
            jwt.sign(payload, key, {
                expiresIn: 604800,
            }, (err, token) => {
                res.status(200).json({
                    success: true,
                    token: `Bearer ${token}`,
                    user: user,
                    msg: 'Hurry! You are now logged in.'
                })
            })
        } else {
            return res.status(404).json({
                msg: "Incorrect password",
                success: false
            })
        }
    })
})

router.post('/loginGoogle', (req, res) => {
    let {
        ft
    } = req.body
    let name = ft.Te
    let email = ft.Qt
    let image = ft.yJ
    User.findOne({
        email: email
    }).then(async(user) => {
        let data = null
        if (!user) {
            let newUser = new User({
                name,
                email,
                image
            })
            data = await newUser.save()
        }
        if (data) {
            user = data
        }

        //User's password is correct and we need to send the JSON Token for that user
        const payload = {
            _id: user._id,
            name: user.name,
            email: user.email
        }
        jwt.sign(payload, key, {
            expiresIn: 604800,
        }, (err, token) => {
            res.status(200).json({
                success: true,
                token: `Bearer ${token}`,
                user: user,
                msg: 'Hurry! You are now logged in.'
            })
        })
    })
})

router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    })
})
module.exports = router