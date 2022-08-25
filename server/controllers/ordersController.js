let User = require('../database/models/user')
let Product = require('../database/models/product')
let Order = require('../database/models/order')
const formatDate = require('../helpers/parseDate');
const httpStatus = require('../helpers/httpStatus');
const [restAmountProducts, obtainDataProducts] = require('../helpers/variousFunctions');


class ordersController {

    static async getAllOrders(req,res){
        let orders ;
        try {
            orders = await Order.find({}).populate('products').populate('userId')

        } catch (error) {
            console.error(error)
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            })
        }

        res.status(httpStatus.OK).json({
            orders
        })
    }
    static async getOneOrder(req,res){

    }
    static async getUserOrders(req,res){

    }
    static async addOrderUser(req,res){
        let {shippingAddress, paymentMethod, products} = req.body
        let idUser = req.params.idUser

        try {
            let [p, totalPrice] = await obtainDataProducts(products)
            let user = await User.findById(idUser)
            if (user) {
                let order = new Order({
                    NumberOrder : Date.now(),
                    date : formatDate(Date()),
                    status : 'Processing',
                    shippingAddress,
                    paymentMethod,
                    products : p,
                    totalPrice: totalPrice,
                    userId : idUser
                })

                order.products.forEach(p => {
                    restAmountProducts(p._id, p.amount)
                });
                await order.save()
                return res.status(httpStatus.OK).json({
                    order
                })
            }

            
        } catch (error) {
            console.error(error)   
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            })         
        }
    }
    static async editOrderUser(req,res){

    }
    static async deleteOrder(req,res){

    }
}

module.exports = ordersController