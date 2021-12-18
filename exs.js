const express = require('express')
const app = express()
const port = 3000
let product = ["milk","meat","rice"]
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products', (req, res) => {
    res.send(product);
})

app.get("/products/:id", (req, res) => {
    let i = req.params["id"];
    res.send(product[i]);
});

app.post("/addproduct", (req, res) => {
   var newPrd=req.body;
   product.push(newPrd);
});

app.delete("/products/:id", (req, res) => {
    const productindex = product.findIndex(({ id }) => id === req.params.id);
    if (productindex >= 0) {
        product.splice(productindex, 1);
});

app.listen(port)