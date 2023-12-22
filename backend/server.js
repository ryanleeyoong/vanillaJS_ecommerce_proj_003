import express from 'express';
import cors from 'cors';
import data from './data.js';

const app = express();
app.use(cors());
app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.listen(5001, () =>{
    console.log('serve at http://localhost:5001')
    console.log('products JSON at http://localhost:5001/api/products')
});

