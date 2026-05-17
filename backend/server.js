const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());



// Users
let users = [];



// Products
let products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000
    },
    {
        id: 2,
        name: "Mobile",
        price: 20000
    },
    {
        id: 3,
        name: "Headphones",
        price: 2000
    }
];



// Orders
let orders = [];



// REGISTER API
app.post("/register", (req, res) => {

    const user = req.body;

    users.push(user);

    res.json({
        message: "User Registered Successfully"
    });

});



// LOGIN API
app.post("/login", (req, res) => {

    const { email, password } = req.body;

    const user = users.find(
        (u) => u.email === email && u.password === password
    );

    if(user){

        res.json({
            message: "Login Successful",
            role: "user"
        });

    }else{

        res.json({
            message: "Invalid Email or Password"
        });

    }

});



// GET PRODUCTS API
app.get("/products", (req, res) => {

    res.json(products);

});



// ADD PRODUCT API
app.post("/add-product", (req, res) => {

    const product = req.body;

    products.push(product);

    res.json({
        message: "Product Added Successfully"
    });

});



// CREATE ORDER API
app.post("/order", (req, res) => {

    const order = req.body;

    orders.push(order);

    res.json({
        message: "Order Placed Successfully"
    });

});



// GET ORDERS API
app.get("/orders", (req, res) => {

    res.json(orders);

});



app.listen(5000, () => {

    console.log("Server running on port 5000");

});