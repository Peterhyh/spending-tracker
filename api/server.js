const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const incomeRouter = require('./routes/IncomeRouter');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB!'))
    .catch(console.error);

app.use('/income', incomeRouter);

app.listen(3001, () => console.log('Server is listening on port 3001'));