const ProductController = require('../controllers/product.controller')

module.exports = app => {
    app.post('/api/addProduct', ProductController.createNewProduct)
    app.get('/api/allproducts', ProductController.allProducts)
}