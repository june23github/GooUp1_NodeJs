require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');
const PORT = process.env.PORT || 5000;
const url = process.env.DATABASE_URL;

const db = require('./config/database')
const authRoute = require('./routes/auth');
// const swagger = require('./swagger');

db(url);

const app = express();

app.use(express.json());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('Hello, This is Home Page');
})

app.use('/auth', authRoute);


// swagger(app);


app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
})



