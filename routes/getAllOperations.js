const express = require('express');
const router = express();
const Operation = require('../models/Operation');

router.get('/', async (req, res, next) => {
    
    
    try {
        const operations = await Operation.find()
        if (!operations) return res.json({message: "not found", status: false})
        res.json({operations: operations , status: true})
    } catch (err) {
        res.json({err: err.message})
    }

})

module.exports = router;