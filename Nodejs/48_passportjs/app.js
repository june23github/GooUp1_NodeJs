require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');
const PORT = process.env.PORT || 5000;
const url = process.env.DATABASE_URL;

const db = require('./database/db')
const authRoute = require('./routes/auth')

db(url);

const app = express();

app.use(express.json());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRoute);

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
})



