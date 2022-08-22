/**
 * @swagger
 * tags:
 *    name: Products
 *    description: CRUD for products.  
 *    
 */

/**
 * @swagger
 * /products:
 *  get:
 *    summary: List all products
 *    tags: [Products]
 *    responses:
 *      200:
 *        $ref: '#/components/responses/OKGETP'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */

/**
 * @swagger
 * /products/create:
 *  post:
 *    summary: Create new product
 *    tags: [Products]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Products'
 *    responses:
 *      200:
 *        $ref: '#/components/responses/OKCREATEP'
 *      400:
 *        $ref: '#/components/responses/BadRequestPCreated'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */

/**
 * @swagger
 * /products/{id}:
 *  get:
 *    summary: Obtain One product 
 *    tags: [Products]
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The product id 
 *    responses:
 *      200:
 *        $ref: '#/components/responses/OKGETP'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */

/**
 * @swagger
 * /products/edit/{id}:
 *  put:
 *    summary: Edit products
 *    tags: [Products]
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The product id 
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Products'
 *    responses:
 *      200:
 *        $ref: '#/components/responses/OKEDIT'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */

/**
 * @swagger
 * /products/delete/{id}:
 *  delete:
 *    summary: delete one products
 *    tags: [Products]
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
 *        $ref: '#/components/responses/BadRequestP'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */




/**
 * @swagger
 * components: 
 *  schemas:
 *    Products:
 *      type: object
 *      properties: 
 *        name:
 *          type: string
 *          description: categorie name
 *        images:
 *          type: Array
 *          description: list images for products
 *        description:
 *          type: string
 *          description: product description
 *        price:
 *          type: number
 *          description: product price
 *        discount:
 *          type: number
 *          description: product discount
 *        categoriesId:
 *          type: Array
 *          description: contain categories ids
 *        subCategoriesId:
 *          type: Array
 *          description: contain subcategories ids
 *        weigth:
 *          type: number
 *          description: products Weight
 *      required:
 *        - name
 *        - price
 *        - categoriesId
 *        - subCategorieId
 *      example:
 *        name: nameProducts
 *        images: [urls images]
 *        description: description
 *        price: 11111
 *        discount: 30
 *        categoriesId: ['8467981asdad7qwe', 'ad7s6da7dasda87gdf7'] 
 *        subCategoriesId: ['8467981asdad7qwe', 'ad7s6da7dasda87gdf7'] 
 *        weigth: 32 
 *  responses:
 *    OKP1:
 *      description: OK
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            products : [{
 *              _id : 62f6g46as7/8ewqc74657,
 *              name : Comida para perro,  
 *              images : [http:images1, http:images1],  
 *              price : 4567,  
 *              description : Comida para perro,  
 *              discount : 30,  
 *              weigth : 24,  
 *              categoriesId : ['8467981asdad7qwe', 'ad7s6da7dasda87gdf7'],    
 *              subCategoriesId : ['8467981asdad7qwe', 'ad7s6da7dasda87gdf7'],    
 *            }]
 *    OKGETP:
 *      description: OK
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            products : [{
 *              _id : 62f6g46as7/8ewqc74657,
 *              name : Comida para perro,  
 *              images : [http:images1, http:images1],  
 *              price : 4567,  
 *              description : Comida para perro,  
 *              discount : 30,  
 *              weigth : 24,  
 *              categoriesId : ['8467981asdad7qwe', 'ad7s6da7dasda87gdf7'],    
 *              subCategoriesId : ['8467981asdad7qwe', 'ad7s6da7dasda87gdf7'],    
 *            }]
 *    OKCREATEP:
 *      description: succe
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg : successful category creation
 *            product : {
 *              _id : 62f6g46as7/8ewqc74657,
 *              name : Comida para perro,  
 *              images : [http:images1, http:images1],  
 *              price : 4567,  
 *              description : Comida para perro,  
 *              discount : 30,  
 *              weigth : 24,  
 *              categoriesId : ['8467981asdad7qwe', 'ad7s6da7dasda87gdf7'],    
 *              subCategoriesId : ['8467981asdad7qwe', 'ad7s6da7dasda87gdf7'],    
 *            }
 *    OKEDIT:
 *      description: edition categorie
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg : successful edition
 *    OKDELETEP:
 *      description: delete product
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg : successful delete
 *    BadRequestP:
 *      description: Bad Request
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg: Error deleting, record not found
 *    BadRequestPCreated:
 *      description: Bad Request
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            errors: [
 *              {
 *                msg : "Wrong description, string only",
 *                param : desciption,
 *                location : body,
 *              },
 *              {
 *                msg : price is required,
 *                param : price,
 *                location : body,
 *              },
 *              {
 *                msg : "Wrong discount, number only",
 *                param : discount,
 *                location : body,
 *              },
 *              {
 *                msg : categoriesId is required,
 *                param : categoriesId,
 *                location : body,
 *              },
 *              {
 *                msg : subCategoriesId is required,
 *                param : subCategoriesId,
 *                location : body,
 *              }
 *            ]
 *    NotFoundP:
 *      description: Not Found
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg: product not found
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