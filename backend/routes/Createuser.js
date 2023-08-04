const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator')

router.post('/createuser',
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "Incorrect password").isLength({ min: 5 })
    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }


        try {
            await User.create({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
                location: req.body.location

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

router.post("/loginuser",async(req,res)=>{
    let email=req.body.email
    try{
        let userdata= await User.findOne({email})
        if(!userdata){
            return  res.status(400).json({ errors: "Try logging with correct credentials" });
        }
        if(req.body.password !== userdata.password){
            return  res.status(400).json({ errors: "Try logging with correct credentials" });
        }
        return res.json({success:true})
    }catch(error){
        console.log(error);
        res.json({success:false})
    }
})
module.exports = router;