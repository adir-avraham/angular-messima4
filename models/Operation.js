const mongoose = require('mongoose');


const OperationSchema = new mongoose.Schema({
    
    type: {
        type: String,
        require: true
    },
    sum: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    },
    interest: {
        type: Number
    },
    payments: {
        type: Number
    },
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'account',
        require: true  
    }
})


module.exports = mongoose.model('operation', OperationSchema);
 