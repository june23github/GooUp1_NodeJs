require('dotenv').config();
const express = require('express');
const i18n = require('i18n');
const path = require('path');

const app = express();

app.use(express.json());


i18n.configure({
  locales: ['en', 'vi'],
  directory: path.join(__dirname, '/locales')
});


app.use(i18n.init);


app.use((req, res, next) => {
  const lang = req.headers['accept-language'];
  if (lang) {
    req.setLocale(lang.split(',')[0]);
  }
  next();
});

app.get('/', (req, res) => {
    const { content } = req.body;
    console.log(content);
    res.send(res.__(content));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
