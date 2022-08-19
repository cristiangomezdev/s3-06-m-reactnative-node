/**
 * @swagger
 * tags:
 *    name: Sub Categories
 *    description: CRUD for sub categories.  
 *    
 */

/**
 * @swagger
 * /categories/subCategories:
 *  get:
 *    summary: List all sub categories 
 *    tags: [Sub Categories]
 *    responses:
 *      200:
 *        $ref: '#/components/responses/OKGETSUBCATEGORIE'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */

/**
 * @swagger
 * /categories/subCategorie/{id}:
 *  get:
 *    summary: Obtain One sub categories 
 *    tags: [Sub Categories]
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The sub category id 
 *    responses:
 *      200:
 *        $ref: '#/components/responses/OKSUBCATEGORIE'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */

/**
 * @swagger
 * /categories/subCategorie/create:
 *  post:
 *    summary: Create new sub categorie
 *    tags: [Sub Categories]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/SubCategoriesAdd'
 *    responses:
 *      200:
 *        $ref: '#/components/responses/OKCREATESUB'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */

/**
 * @swagger
 * /categories/subCategorie/edit/{id}:
 *  put:
 *    summary: Edit sub categorie
 *    tags: [Sub Categories]
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The sub category id 
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/SubCategories'
 *    responses:
 *      200:
 *        $ref: '#/components/responses/OKEDITSUB'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */

/**
 * @swagger
 * /categories/subCategorie/delete/{id}:
 *  delete:
 *    summary: delete one sub categorie
 *    tags: [Sub Categories]
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The category id 
 *    responses:
 *      200:
 *        $ref: '#/components/responses/OKDELETESUB'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */

/**
 * @swagger
 * components: 
 *  schemas:
 *    SubCategories:
 *      type: object
 *      properties: 
 *        name:
 *          type: string
 *          description: sub categorie name
 *        image:
 *          type: string
 *          description: url image for sub categorie
 *      required:
 *        - name
 *      example:
 *        name: nameCategorie
 *        image : url image 
 *    SubCategoriesAdd:
 *      type: object
 *      properties: 
 *        name:
 *          type: string
 *          description: sub categorie name
 *        image:
 *          type: string
 *          description: url image for sub categorie
 *        categorieId:
 *          type: string
 *          description: categorie id for relation
 *      required:
 *        - name
 *      example:
 *        name: nameCategorie
 *        image : url image 
 *        categorieId : categorie Id 
 *  responses:
 *    OKGETSUBCATEGORIE:
 *      description: OK
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            subCategories : [{
 *              _id : 62f6g46as7/8ewqc74657,
 *              name : CategorieName,  
 *              image : url image   
 *            }]
 *    OKSUBCATEGORIE:
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
 *              name : SubCategorieName,  
 *              image : url image   
 *            }
 *    OKCREATESUB:
 *      description: creation sub categorie
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg : successful sub category creation
 *            subCategorie : {
 *              _id : 62f6g46as7/8ewqc74657,
 *              name : CategorieName,  
 *              subCategories : [],    
 *            }
 *    OKEDITSUB:
 *      description: edition sub categorie
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg : successful edition
 *    OKDELETESUB:
 *      description: delete sub categorie
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