const productDataMapper = require('../dataMapper/productDataMapper');
const CustomError = require('../helpers/CustomError');

const productController = {
    
    getAllProducts: async (request, response, next) => {
        let io = request.app.get('socketio');
        let products;
        
        console.log(request.query.search, "<<-- Search query");
        if (request.query.search) {
            let searchObject = request.query.search.split(' ');
            searchObject = searchObject.join(' | ');
            console.log(searchObject, "<<join");
            products = await productDataMapper.getAllProduct(searchObject);
        } else {
            products = await productDataMapper.getAllProduct();
        }
        
        io.on('connection', (socket) => {
            console.log("<<<socket on connection getAllproducts");
            io.emit('updateProduct', products);
        });

        response.status(200).json({
            success: true,
            data: products
        });
    },

    getOneProduct: async (request, response, next) => {
        let io = request.app.get('socketio');
        const {id} = request.params;
        let stock = null;
        const product = await productDataMapper.getOneProduct(id);
        if (product.quantity <= 3) {
            product.stock = `Attention stock très bas : ${product.quantity}`;
        } if (product.quantity <= 0) {
           product.stock = `Attention rupture de stock : ${product.quantity}`;
        }
        io.on('connection', (socket) => {
            // socket.on('updateProduct', (msg) => {
                io.emit('updateProduct', product);
            // });
        });
        response.status(200).json({
            success: true,
            data: product
        })
    },

    getProductsByCategoryId: async (request, response, next) => {
        let io = request.app.get('socketio');
        const {categoryId} = request.params;
        const productsByCategory = await productDataMapper.getProductsByCategory(categoryId);
        if (productsByCategory == null) {
            return next(new CustomError("Category not exist", 400));
        }

        io.on('connection', (socket) => {
            socket.on('updateProduct', (msg) => {
                io.emit('updateProduct', productsByCategory);
            });
        });
        
        response.status(200).json({
            
            success: true,
            data: productsByCategory
        })
    },

    addNewProduct: async (request, response, next) => {
        const productInfo = request.body;
        console.log("addOneProduct");
        const product = await productDataMapper.addOneProduct(productInfo);
        if (product == null) {
            return next(new CustomError("Product already exist", 400));
        }
        response.status(200).json({
            success: true,
            message: "product added",
            data: product
        });
    },

    updateProduct: async (request, response, next) => {
        let io = request.app.get('socketio');
        const {id} = request.params;
        const productInfo = request.body;
        let stock;
        const product = await productDataMapper.updateOneProduct(id,productInfo);
        if (product == null) {
            return next(new CustomError("Product not exist", 400));
        }
        if (product.quantity <= 3) {
            product.stock = `Attention stock très bas : ${product.quantity}`;
        } if (product.quantity <= 0) {
           product.stock = `Attention rupture de stock : ${product.quantity}`;
        }
       
        io.on('connection', (socket) => {
            // socket.on('updateProduct', (msg) => {
                io.emit('updateProduct', product);
            // });
        });
        response.status(200).json({
            success: true,
            message: stock || `product ${id} updated`,
            data: product
        });
    },

    deleteProduct: async (request, response, next) => {
        const {id} = request.params;
        const product = await productDataMapper.deleteOneProduct(id);
        if (product == null) {
            return next(new CustomError("Product not exist", 400));
        }
        response.status(200).json({
            success: true,
            message: `product ${id} deleted`,
            data: product
        });
    },

    imageUpload: async(req, res, next) => {
        
            // we are looking for the id of product
            const productImage = req.savedProductImage;
            const {id} = req.params;
            console.log(id);
            const product = await productDataMapper.imageUpload(productImage, id);
            
            res.status(200)
            .json({
                success: true,
                message: "Image Upload Successfull",
                data: product
            });



    },

    updateQuantityById: async (request, response, next) => {
        let io = request.app.get('socketio');
        const newProduct = [];
        const cart = request.body;
        // console.log(cart);
        for (const product of cart) {
            const {id, qty} = product;

            const newStock = await productDataMapper.updateQuantityById(id, qty);
            newProduct.push(newStock);
            // io.emit('updateProduct', newStock);
        }
        io.on('connection', (socket) => {
          
                io.emit('updateProduct', newProduct);
          
        });
        console.log(newProduct);
        response.status(200)
        .json({
            success: true,
            message: "Quantity updated",
            data: newProduct
        });
    },

    
}

module.exports = productController;