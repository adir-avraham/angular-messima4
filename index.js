require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


//define routes
const getAllAccounts = require('./routes/getAllAccounts');
const createOperation = require('./routes/createOperation');
const getOneAccount = require('./routes/getOneAccount'); 
const getAllOperations = require('./routes/getAllOperations');

app.use(cors());
app.use(bodyParser.json());

//index routes
app.use('/getAllAccounts', getAllAccounts)
app.use('/createOperation', createOperation)
app.use('/getOneAccount', getOneAccount)
app.use('/getAllOperations', getAllOperations)


mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{
    console.log("Connected to DB")
});

app.listen(process.env.PORT, () => {
    console.log(`Server is listening to port: ${process.env.PORT}`)
});



