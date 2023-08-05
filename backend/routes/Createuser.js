const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const jwtSecret="bjhdjhbhjbfjbdbfhfbd"

router.post('/createuser',
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "Incorrect password").isLength({ min: 5 })
    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const salt = await bcrypt.genSalt(10)
        let secPassword = await bcrypt.hash(req.body.password, salt)

        try {
            await User.create({
                name: req.body.name,
                password: secPassword,
                email: req.body.email,
                location: req.body.location

                // name: "nishanth",
                // password: "123456",
                // email: "nishanthbhat20@gmail.com",
                // location: "India"
            }).then(
                res.json({ success: true }))
        }
        catch (error) {
            console.log(error);
            res.json({ success: false })
        }
    })

router.post("/loginuser",
    body("email").isEmail(),
    body("password", "Incorrect password").isLength({ min: 5 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let email = req.body.email
        try {
            let userdata = await User.findOne({ email })
            if (!userdata) {
                return res.status(400).json({ errors: "Try logging with correct credentials" });
            }
            const pwdCompare= await bcrypt.compare(req.body.password,userdata.password)
            if (!pwdCompare) {
                return res.status(400).json({ errors: "Try logging with correct credentials" });
            }
            const data={
                user:{
                    id:userdata.id
                }
            }
            const authtoken=jwt.sign(data,jwtSecret)
            return res.json({ success: true ,authtoken})
        } catch (error) {
            console.log(error);
            res.json({ success: false })
        }
    })
module.exports = router;