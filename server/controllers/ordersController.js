let User = require('../database/models/user')
let Categorie = require('../database/models/categorie')
let Product = require('../database/models/product')
let Order = require('../database/models/order')
const formatDate = require('../helpers/parseDate');
const httpStatus = require('../helpers/httpStatus');


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
        let idUser = req.params.idUser
        try {
            let user = await User.findById(idUser)
            if (user) {
                let order = new Order({
                    NumberOrder : Date.now(),
                    date : formatDate(Date()),
                    status : 'Processing',
                    shippingAddress : 'Street 23, Barrio, city, Country',
                    paymentMethod : '1111 2222 3333 4444',
                    products : [{
                        _id: "630415ff9789e34cd4cb873e",
                        name: "Prueba de filtrado2",
                        images: ["urls images"],
                        description: "description",
                        price: 11111,
                        discount: 30,
                        weigth: 32,
                        amount : 2
                    },{
                        _id: "6306285d7bd9ff5788a97019",
                        name: "nuevo product",
                        images: ["papasfritas.com/djhasj"],
                        description: "description random",
                        price: 1001,
                        discount: 30,
                        weigth: 32,
                        amount : 2
                    }],
                    totalAmount : 11111,
                    userId : idUser
                })

                order.products.forEach(p => {
                    restAmountProducts(p._id, p.amount)
                });
                await order.save()
                return res.status(200).json({
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