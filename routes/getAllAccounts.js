const express = require('express');
const router = express.Router();
const Account = require('../models/Account');




router.get('/', async (req, res, next) => {


    try{
        const accounts = await Account.find().populate('operations')
        if (!accounts) return res.json({message: "not found", status: false})
        res.json({accounts: accounts, status: true})  
    } catch {
        res.json({error: "some error", status: false})
    }

})

module.exports = router;