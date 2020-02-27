require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


//define routes
const getAllOperations = require('./routes/getAllOperations');
const getAllAccounts = require('./routes/getAllAccounts');
const createOperation = require('./routes/createOperation');


app.use(cors());
app.use(bodyParser.json());

//index routes
app.use('/getAllOperations', getAllOperations)
app.use('/getAllAccounts', getAllAccounts)
app.use('/createOperation', createOperation)


mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{
    console.log("Connected to DB")
});

app.listen(process.env.PORT, () => {
    console.log(`Server is listening to port: ${process.env.PORT}`)
});



