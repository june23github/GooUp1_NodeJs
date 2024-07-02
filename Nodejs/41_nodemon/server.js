const express = require('express');


const PORT = 5000;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    const { data } = req.body;
    if (data){
        res.status(200).json({
            message: 'Hello World'
        })
    }else{
        res.status(400).json({
            message: "No data received"
        })
    }
    
})

app.listen(PORT, () => {
    console.log(`Listen on https://localhost:${PORT}`);
})