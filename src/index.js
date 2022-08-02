require('dotenv').config();
const express = require('express');
const morgan = require ('morgan');
const connectDB = require ('./database/db');
const userRouter = require ('./routes/user.routes');
const logger = require ('morgan');




const app = express();

connectDB();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));
app.use('/api', userRouter);

const port = process.env.PORT || 2300

app.get('/', (req,res) => res.send('Home Page'));

app.all('*', (req,res) => {
    return res.status(404).json({ message: 'Oops page not found'});

});

app.listen(port, () => {
    console.log(`Server up and running on port http://localhost:${port}`);
})