const router = require("express").Router();
const User = require("./models/User");
const users = require("./data/Users");
const Product = require("./models/Product");
const products = require("./data/Product")
const AsyncHandler = require("express-async-handler");

router.post("/users", AsyncHandler(
    async (req,res) => {
    await User.deleteMany({});
    const UserSeeder = await User.insertMany(users);
    res.send({UserSeeder})
}
));

router.get("/products", AsyncHandler(
     async (req,res) => {
    await Product.deleteMany({});
    const ProductSeeder = await Product.insertMany(products);
    res.send({ ProductSeeder })
}
));

module.exports = router;