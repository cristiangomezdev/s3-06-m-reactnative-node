let Product = require('../database/models/product')
let httpStatus = require('../helpers/httpStatus')

class ProductController{
    static async getProducts(req, res){
        let products
        try {
            products = await Product.find({})
            
        } catch (error) {
            console.error(error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            })
        }

        if (!products) {
            return res.status(httpStatus.NOT_FOUND).json({
                msg : 'products not found'
            })
        }
        res.status(httpStatus.OK).json({
            products
        })
    }

    static async getOneProducts(req, res){
        let idParams = req.params.id
        let product ;
        try {
            product = await Product.findById(idParams)
        } catch (error) {
            console.error(error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            })
        }
        if (!product) {
            return res.status(httpStatus.NOT_FOUND).json({
                msg : 'product not found'
            })
        }

        res.status(httpStatus.OK).json({
            product
        })
    }

    static async addProduct(req, res){
        let {name, images, description, price, discount, categoriesId, subCategoriesId, weigth } = req.body
        let newProduct = new Product({
            name,
            images : images || "default-image.png",
            description,
            price : price || 0,
            discount : discount || 0,
            categoriesId,
            subCategoriesId,
            weigth
        })

        try {
            await newProduct.save()
            res.status(httpStatus.CREATED).json({
                msg : "successful creation",
                product: newProduct
            })
        } catch (error) {
            console.error(error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            })
        }
    }

    static async editProduct(req, res){
        let idParams = req.params.id
        let { name, images, description, price, discount, categoriesId, subCategoriesId, weigth  } = req.body
        let product;
        try {
            product = await Product.findById(idParams)
            if (product) {
                product.name = name
                product.images = images ? product.images.push(images) : product.images
                product.description = description || product.description
                product.price = price || product.price
                product.discount = discount || product.discount
                product.categoriesId = categoriesId || product.categoriesId
                product.subCategoriesId = subCategoriesId || product.subCategoriesId
                product.weigth = weigth || product.weigth
                await product.save()
            }
        } catch (error) {
            console.error(error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            })
        }

        if (!product) {
            return res.status(httpStatus.NOT_FOUND).json({
                msg : 'product not found'
            })
        }

        res.status(httpStatus.OK).json({
            product
        })

    }

    static async deleteProduct(req, res){
        let idParams = req.params.id
        let product
        try {
            product = await Product.deleteOne({_id : idParams})
        } catch (error) {
            console.log(error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            })
        }
        if(product.deletedCount === 0){
            return res.status(httpStatus.BAD_REQUEST).json({
                msg : 'Error deleting, record not found'
            })
        }
        res.status(httpStatus.OK).json({
            msg : 'successful delete'
        })
    }
}

module.exports = ProductController