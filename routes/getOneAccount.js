const express = require('express');
const router = express.Router();

const Account = require('../models/Account');

router.get('/:account_id',async (req, res, next) => {
    const { account_id } = req.params;

    try {
        const account = await Account.find({_id: account_id}).populate('operations') 
        if (!account) return res.json({message: "not found", status: false});
        res.json({account: account, status: true})
    } catch (err) {
        res.json({error: err.message, status: false})
    }
    
})

module.exports = router;