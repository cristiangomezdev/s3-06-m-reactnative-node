let Product = require('../database/models/product')

const restAmountProducts = async (id, cant)=>{
    let product;
    try {
        product = await Product.findById(id)
        product.amount = product.amount - cant
        await product.save()
        return true
    } catch (error) {
        console.error(error)
        return false
    }
    
}


let obtainDataProducts = async (products)=>{
    let product = []
    let totalPrice = 0
    for (let i = 0; i < products.length; i++) {
        let { _id, name, images, description, price, discount} = await Product.findById(products[i]._id)
        let priceProduct = (price - (( price * discount) / 100))
        product.push({
            _id,
            name,
            images,
            description,
            price : priceProduct,
            amount : products[i].amount
        })
        totalPrice = totalPrice + priceProduct

    }
    return [product, totalPrice]
}

module.exports = [restAmountProducts, obtainDataProducts]