const express = require('express');
const bodyParser= require('body-parser')    
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/")
    },
    filename: (req, file, cb) => {
        const nameFile = Date.now() + '_' + file.originalname;
        cb(null, nameFile);
    }
})


const upload = multer({storage: storage})

app.post('/upload', upload.single('file'), (req, res) => {
    if (req.file) {
        const filePath = `http://localhost:5000/public/${req.file.filename}`;
        res.json({ message: 'File uploaded successfully', path: filePath });
      } else {
        res.status(400).json({ message: 'File upload failed' });
      }
});

app.get('/upload/:filename', (req, res) => {
    const filePath = path.join(__dirname, 'public', req.params.filename);
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        res.status(404).json({ message: 'File not found' });
      } else {
        res.sendFile(filePath);
      }
    });
  });
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
