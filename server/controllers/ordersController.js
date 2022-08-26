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

        if(!orders){
            return res.status(httpStatus.NOT_FOUND).json({
                msg : 'orders not found'
            })
        }

        res.status(httpStatus.OK).json({
            orders
        })
    }
    static async getOneOrder(req,res){
        let order;
        let idOrder = req.params.idOrder
        try {
            order = await Order.findById(idOrder)
        } catch (error) {
            console.log(error)   
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            })         
        }
        if(!order){
            return res.status(httpStatus.NOT_FOUND).json({
                msg : 'order not found'
            })
        }
        res.status(httpStatus.OK).json({
            order
        })
    }
    static async getUserOrders(req,res){
        let idUser = req.params.idUser
        let user;
        let order;
        try {
            user = await User.findById(idUser)
            if(!user){
                return res.status(httpStatus.NOT_FOUND).json({
                    msg : 'user not found'
                })
            }
            order = await Order.find({ userId : idUser}).populate('userId')
        } catch (error) {
            console.log(error)   
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            }) 
        }
        if(!order){
            return res.status(httpStatus.NOT_FOUND).json({
                msg : 'orders not found'
            })
        }

        res.status(httpStatus.OK).json({
            order
        })    
    }
    static async addOrderUser(req,res){
        let {shippingAddress, paymentMethod, products} = req.body
        let idUser = req.params.idUser
        let user;

        try {
            let [p, totalPrice] = await obtainDataProducts(products)
            user = await User.findById(idUser)
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
                return res.status(httpStatus.CREATED).json({
                    order
                })
            }
        } catch (error) {
            console.error(error)   
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            })         
        }
        return res.status(httpStatus.BAD_REQUEST).json({
            msg : 'error user does not exist'
        })
    }
    static async editOrderUser(req,res){
        let idOrder = req.params.id
        let {status, shippingAddress, paymentMethod, products, totalPrice} = req.body
        let order;
        let p;
        let price;
        if(products){
            [p, price] = await obtainDataProducts(products)
        }

        try {
            order = await Order.findOne({ _id : idOrder})
            if (!order) {
                return res.status(httpStatus.NOT_FOUND).json({
                    msg : 'order not found'
                })
            }     
            order.status = status || order.status
            order.shippingAddress = shippingAddress || order.shippingAddress
            order.paymentMethod = paymentMethod || order.paymentMethod
            order.products = p ? p : order.products
            order.totalPrice = price || order.totalPrice  
            
            await order.save()
        } catch (error) {
            console.error(error)   
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            })
        }

        return res.status(httpStatus.OK).json({
            order
        })
    }
    static async deleteOrder(req,res){
        let id = req.params.id
        let deleteOrder;
        try {
            deleteOrder = await Order.deleteOne({_id : id})
        } catch (error) {
            console.log(error)
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            })  
        }
        if(deleteOrder.deletedCount === 0){
            return res.status(httpStatus.BAD_REQUEST).json({
                msg : 'Error deleting, record not found'
            })
        }

        res.status(httpStatus.OK).json({
            msg : 'successful delete'
        })

    }
}

module.exports = ordersController