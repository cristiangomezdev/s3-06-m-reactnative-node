/**
 * @swagger
 * tags:
 *    name: Orders
 *    description: CRUD for Orders.  
 *    
 */

/**
 * @swagger
 * /orders:
 *  get:
 *    summary: List all orders
 *    tags: [Orders]
 *    responses:
 *      200:
 *        $ref: '#/components/responses/OKPGETALLORDER'
 *      404:
 *        $ref: '#/components/responses/NotFoundOrders'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */

/**
 * @swagger
 * /orders/{idOrder}:
 *  get:
 *    summary: Obtain One order 
 *    tags: [Orders]
 *    parameters:
 *     - in: path
 *       name: idOrder
 *       schema:
 *         type: string
 *       required: true
 *       description: The order id 
 *    responses:
 *      200:
 *        $ref: '#/components/responses/OKPGEToneORDER'
 *      404:
 *        $ref: '#/components/responses/NotFoundOrders'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */

/**
 * @swagger
 * /orders/user/{idUser}:
 *  get:
 *    summary: Obtain all order for user 
 *    tags: [Orders]
 *    parameters:
 *     - in: path
 *       name: idUser
 *       schema:
 *         type: string
 *       required: true
 *       description: The user id 
 *    responses:
 *      200:
 *        $ref: '#/components/responses/OKPGEToneORDER'
 *      404:
 *        $ref: '#/components/responses/NotFoundOrders'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */

/**
 * @swagger
 * /orders/create/{idUser}:
 *  post:
 *    summary: Create new product
 *    tags: [Orders]
 *    parameters:
 *     - in: path
 *       name: idUser
 *       schema:
 *         type: string
 *       required: true
 *       description: The user id 
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Orders'
 *    responses:
 *      201:
 *        $ref: '#/components/responses/OKPGEToneORDER'
 *      400:
 *        $ref: '#/components/responses/BadRequestO'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */

/**
 * @swagger
 * /orders/edit/{id}:
 *  put:
 *    summary: Edit orders
 *    tags: [Orders]
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The orders id 
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/OrdersUpdate'
 *    responses:
 *      200:
 *        $ref: '#/components/responses/OKPGEToneORDER'
 *      404:
 *        $ref: '#/components/responses/NotFoundOrders'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */

/**
 * @swagger
 * /orders/delete/{id}:
 *  delete:
 *    summary: delete one orders
 *    tags: [Orders]
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The products id 
 *    responses:
 *      200:
 *        $ref: '#/components/responses/OKDELETEP'
 *      400:
 *        $ref: '#/components/responses/BadRequestDeleting'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */

/**
 * @swagger
 * components: 
 *  schemas:
 *    Orders:
 *      type: object
 *      properties: 
 *        NumberOrder:
 *          type: string
 *          description: UID order
 *        date:
 *          type: Date
 *          description: date order created
 *        status:
 *          type: string
 *          description: order status
 *        shippingAddress:
 *          type: string
 *          description: addres user for delivered
 *        paymentMethod:
 *          type: string
 *          description: method payment
 *        products:
 *          type: Array
 *          description: products ids
 *        totalPrice:
 *          type: number
 *          description: total price
 *        userId:
 *          type: string
 *          description: user id
 *      required:
 *        - shippingAddress
 *        - paymentMethod
 *        - products
 *      example:
 *        shippingAddress: Street 23, Barrio, city, Country
 *        paymentMethod: "1111 2222 3333 4444"
 *        products: [{ _id : "630415ff9789e34cd4cb873e", amount : 2 }]
 *        totalPrice: 13456
 *    OrdersUpdate:
 *      type: object
 *      properties: 
 *        NumberOrder:
 *          type: string
 *          description: UID order
 *        date:
 *          type: Date
 *          description: date order created
 *        status:
 *          type: string
 *          description: order status
 *        shippingAddress:
 *          type: string
 *          description: addres user for delivered
 *        paymentMethod:
 *          type: string
 *          description: method payment
 *        products:
 *          type: Array
 *          description: products ids
 *        totalPrice:
 *          type: number
 *          description: total price
 *        userId:
 *          type: string
 *          description: user id
 *      example:
 *        status: Processing
 *        shippingAddress: Street 23, Barrio, city, Country
 *        paymentMethod: "1111 2222 3333 4444"
 *        products: [{ _id : "630415ff9789e34cd4cb873e", amount : 2 }]
 *        totalPrice: 13456
 *  responses:
 *    OKPGETALLORDER:
 *      description: OK
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            orders : [{
 *              _id : 62f6g46as7/8ewqc74657,
 *              NumberOrder : "1661441503736",
 *              date : "2022-08-26T00:00:00.000Z",  
 *              status: "Processing",  
 *              shippingAddress: "Street 23, Barrio, city, Country", 
 *              paymentMethod: "1111 2222 3333 4444",  
 *              products: [
 *              {
 *                "_id": "630415ff9789e34cd4cb873e",
 *                "name": "Prueba de filtrado2",
 *                "images": ["urls images"],
 *                "description": "description",
 *                "price": 7777.7,
 *                "amount": 2
 *              },
 *              {
 *                "_id": "630415ff9789e34cd4cb873e",
 *                "name": "Prueba de filtrado2",
 *                "images": ["urls images"],
 *                "description": "description",
 *                "price": 7777.7,
 *                "amount": 2
 *              }
 *              ],    
 *              userId: {
 *                "_id": "62fd0aa4b3907553ae8a7cbc",
 *                "name": "Marcos",
 *                "email": "marcos97britos@gmail.com",
 *                "avatar": "default_img.png"
 *              }    
 *            }]
 *    OKPGEToneORDER:
 *      description: OK
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            products : {
 *              _id : 62f6g46as7/8ewqc74657,
 *              NumberOrder : "1661441503736",
 *              date : "2022-08-26T00:00:00.000Z",  
 *              status: "Processing",  
 *              shippingAddress: "Street 23, Barrio, city, Country", 
 *              paymentMethod: "1111 2222 3333 4444",  
 *              products: [
 *              {
 *                "_id": "630415ff9789e34cd4cb873e",
 *                "name": "Prueba de filtrado2",
 *                "images": ["urls images"],
 *                "description": "description",
 *                "price": 7777.7,
 *                "amount": 2
 *              },
 *              {
 *                "_id": "630415ff9789e34cd4cb873e",
 *                "name": "Prueba de filtrado2",
 *                "images": ["urls images"],
 *                "description": "description",
 *                "price": 7777.7,
 *                "amount": 2
 *              }
 *              ],    
 *              userId: "62fd0aa4b3907553ae8a7cbc",    
 *            }
 *    OKPGETuserOrder:
 *      description: OK
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            products : {
 *              _id : 62f6g46as7/8ewqc74657,
 *              NumberOrder : "1661441503736",
 *              date : "2022-08-26T00:00:00.000Z",  
 *              status: "Processing",  
 *              shippingAddress: "Street 23, Barrio, city, Country", 
 *              paymentMethod: "1111 2222 3333 4444",  
 *              products: [
 *              {
 *                "_id": "630415ff9789e34cd4cb873e",
 *                "name": "Prueba de filtrado2",
 *                "images": ["urls images"],
 *                "description": "description",
 *                "price": 7777.7,
 *                "amount": 2
 *              },
 *              {
 *                "_id": "630415ff9789e34cd4cb873e",
 *                "name": "Prueba de filtrado2",
 *                "images": ["urls images"],
 *                "description": "description",
 *                "price": 7777.7,
 *                "amount": 2
 *              }
 *              ],    
 *              userId: {
 *                "_id": "62fd0aa4b3907553ae8a7cbc",
 *                "name": "Marcos",
 *                "email": "marcos97britos@gmail.com",
 *                "avatar": "default_img.png"
 *              }  
 *            }
 *    BadRequestO:
 *      description: Bad Request
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg: error user does not exist
 *    BadRequestDeleting:
 *      description: Bad Request
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg: Error deleting, record not found
 *    NotFoundOrders:
 *      description: Not Found
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg: orders not found
 *    InternalServerError:
 *      description: Internal Server Error
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg: Something went wrong, the server was unable to complete your request
 *    
 *    
 */