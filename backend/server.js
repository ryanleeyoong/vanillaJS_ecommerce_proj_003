/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import data from './data.js';

const app = express();
app.use(cors());
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
// End-point to get information about a specific product
app.get('/api/products/:id', (req, res) => {
  // req.params.id is what the user enters for id on url
  /* use find() on data.products array and execute a function for each 
  element in the array. */
  const product = data.products.find((x)=> x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found!' });
  }
})

app.listen(5001, () => {
  console.log('serve at http://localhost:5001');
  console.log('products JSON at http://localhost:5001/api/products');
});
