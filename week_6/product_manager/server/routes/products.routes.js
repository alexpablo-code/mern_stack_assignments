const ProductController = require('../controllers/product.controller')

module.exports = app => {
    app.post('/api/addProduct', ProductController.createNewProduct)
    app.get('/api/allproducts', ProductController.allProducts)
    app.get('/api/allproducts/:id', ProductController.oneProduct)
    app.put('/api/allproducts/:id/edit', ProductController.updateProduct)
    app.delete('/api/allproducts/delete/:id', ProductController.delete)
}