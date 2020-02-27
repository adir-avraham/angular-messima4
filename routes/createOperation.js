const express = require('express');
const router = express();
const Operation = require('../models/Operation');
const Account = require('../models/Account')

router.post('/', async (req, res, next) => {


    const { sum, interest, payments, account_id, type } = req.body;

    switch (type) {
        case 'withdrawal': {
            newOperation = new Operation ({
                type: type,
                sum: sum              
            })
        }
        break;
        case 'deposit': {
            newOperation = new Operation ({
                type: type,
                sum: sum
            })
        }
        break;
        case 'loan': {
            newOperation = new Operation ({
                type: type,
                sum: sum,
                interest: interest,
                payments: payments
            })
        }
        break;
    }

    
    try {

        const savedOperation = await newOperation.save()
        const [account] = await Account.find({_id: account_id})
        account.operations.push(savedOperation)
        const saved = await account.save()
        const [accountAndOperations] =  await Operation.find({_id: account_id}).populate('operations') 
        res.json({saved: saved, accountAndOperations: accountAndOperations, status: true})

    } catch (err) {
        res.json({error: err.message})
    }
    
 

})



module.exports = router;