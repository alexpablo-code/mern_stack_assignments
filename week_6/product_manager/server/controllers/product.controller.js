const Product = require('../models/product.model');

module.exports = {
    createNewProduct: (req, res) => {
        Product.create(req.body)
            .then(newProduct => {
                res.json({product: newProduct})
            })
            .catch((err) => {
                res.json({message:'Something went wrong', error:err})
            });
    },
    allProducts: (req, res) => {
        Product.find()
            .then((products) => {
                res.json(products)
            })
            .catch((err) => {
                res.json({message:"Something went wrong", error:err})
            })
    }
}