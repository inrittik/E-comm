import Express from "express";
import productDetails from './productsDetails.js';
import productCart from './productCart.js';
const app = Express();

app.get('/api/products', (req, res)=>{
    res.send(productDetails.products);
});

app.get('/cart', (req, res)=>{
    res.send(productCart.products);
}); 
app.get('/', (req, res)=>{
    res.send("Server is ready");
});

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
});
