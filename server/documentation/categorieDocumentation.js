/**
 * @swagger
 * tags:
 *    name: Categories
 *    description: CRUD for categories.  
 *    
 */

/**
 * @swagger
 * /categories:
 *  get:
 *    summary: List all categories 
 *    tags: [Categories]
 *    responses:
 *      200:
 *        $ref: '#/components/responses/OKGET'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */

/**
 * @swagger
 * /categories/{id}:
 *  get:
 *    summary: Obtain One categories 
 *    tags: [Categories]
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The category id 
 *    responses:
 *      200:
 *        $ref: '#/components/responses/OKGET'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */

/**
 * @swagger
 * /categories/create:
 *  post:
 *    summary: Create new categorie
 *    tags: [Categories]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Categories'
 *    responses:
 *      200:
 *        $ref: '#/components/responses/OKCREATE'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */

/**
 * @swagger
 * /categories/edit/{id}:
 *  put:
 *    summary: Edit categorie
 *    tags: [Categories]
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The category id 
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Categories'
 *    responses:
 *      200:
 *        $ref: '#/components/responses/OKEDIT'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */

/**
 * @swagger
 * /categories/delete/{id}:
 *  delete:
 *    summary: delete one categorie
 *    tags: [Categories]
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The category id 
 *    responses:
 *      200:
 *        $ref: '#/components/responses/OKDELETE'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */

/**
 * @swagger
 * components: 
 *  schemas:
 *    Categories:
 *      type: object
 *      properties: 
 *        name:
 *          type: string
 *          description: categorie name
 *        subCategories:
 *          type: Array
 *          description: contain subcategories ids
 *      required:
 *        - name
 *      example:
 *        name: nameCategorie
 *        subCategories: ['8467981asdad7qwe', 'ad7s6da7dasda87gdf7'] 
 *  responses:
 *    OKONE:
 *      description: OK
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            categorie : [{
 *              _id : 62f6g46as7/8ewqc74657,
 *              name : CategorieName,  
 *              subCategories : ['8467981asdad7qwe', 'ad7s6da7dasda87gdf7'],    
 *            }]
 *    OKGET:
 *      description: OK
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            categorie : {
 *              _id : 62f6g46as7/8ewqc74657,
 *              name : CategorieName,  
 *              subCategories : ['8467981asdad7qwe', 'ad7s6da7dasda87gdf7'],    
 *            }
 *    OKCREATE:
 *      description: succe
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg : successful category creation
 *            categorie : {
 *              _id : 62f6g46as7/8ewqc74657,
 *              name : CategorieName,  
 *              subCategories : [],    
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
 *    OKDELETE:
 *      description: delete categorie
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg : successful delete
 *    BadRequest:
 *      description: Bad Request
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg: category not found
 *    NotFound:
 *      description: Not Found
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg: category not found
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