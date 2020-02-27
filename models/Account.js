const mongoose = require('mongoose');


const AccountSchema = new mongoose.Schema({
    number: {
        type: Number,
        unique: true,
        require: true
    },
    operations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'operation'
    }]
})


module.exports = mongoose.model('account', AccountSchema);