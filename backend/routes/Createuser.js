const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/createuser', async (req, res) => {
    try {
        await User.create({
            name:req.body.name,
            password:req.body.password,
            email:req.body.email,
            location:req.body.location

            // name: "nishanth",
            // password: "123456",
            // email: "nishanthbhat20@gmail.com",
            // location: "India"




        })
        res.json({ successs: true })
    }
    catch (error) {
        console.log(error);
        res.json({ successs: false })
    }
})
module.exports = router;