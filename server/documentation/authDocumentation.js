/**
 * @swagger
 * tags:
 *    name: Auth
 *    description: Login, Register and Profile routes of Auth.  
 *    
 */

/**
 * @swagger
 * /auth/register:
 *  post:
 *    summary: Register an user 
 *    tags: [Auth]
 *    requestBody: 
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Register'
 *    responses:
 *      201:
 *        $ref: '#/components/responses/OK2'
 *      400:
 *        $ref: '#/components/responses/BadRequest2'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */

/**
 * @swagger
 * /auth/login:
 *  post:
 *    summary: login an user 
 *    tags: [Auth]
 *    requestBody: 
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Login'
 *    responses:
 *      200:
 *        $ref: '#/components/responses/OK'
 *      400:
 *        $ref: '#/components/responses/BadRequest'
 *      404:
 *        $ref: '#/components/responses/NotFound'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */

/**
 * @swagger
 * components: 
 *  schemas:
 *    Login:
 *      type: object
 *      properties: 
 *        email:
 *          type: string
 *          description: user email
 *        password:
 *          type: string
 *          description: user password
 *      required:
 *        - email
 *        - password
 *      example:
 *        email: example@email.com
 *        password: 123456Aa
 *    Register:
 *      type: object
 *      properties: 
 *        name:
 *          type: string
 *          description: user name
 *        surname:
 *          type: string
 *          description: user surname
 *        email:
 *          type: string
 *          description: user email
 *        password:
 *          type: string
 *          description: user password
 *        age:
 *          type: Number
 *          description: user age
 *        dni:
 *          type: Number
 *          description: user dni
 *        phone:
 *          type: Number
 *          description: user phone
 *        address:
 *          type: string
 *          description: user address
 *        numberAddress:
 *          type: Number
 *          description: user number street
 *        avatar:
 *          type: string
 *          description: user avatar profile
 *        admin:
 *          type: boolean
 *          description: admin in page
 *      required:
 *        - name
 *        - email
 *        - password
 *      example:
 *        name: Usuario
 *        surname: Apellido
 *        email: example@email.com
 *        password: 123456Aa
 *        age: 35
 *        dni: 11222333
 *        phone: 9997665544
 *        address: calle
 *        numberAddress: 1566
 *        avatar: default.png
 *        admin: false
 *  responses:
 *    OK:
 *      description: OK
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg : successful login,
 *            token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmYxNzQyZDc5MDk1YTc2ODM0YzE5ZjMiLCJlbWFpbCI6Im1hcmNvc0BnbWFpbC5jb20iLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTY2MDA1MzkzNywiZXhwIjoxNjYwMDU3NTM3fQ.eGeQi4oJvUkayuVwlMmZbnwHQdJ5ZiOIF1tnlq5Zg3c,
 *            user : {
 *              _id : 62f6g46as7/8ewqc74657,
 *              name : Usuario,    
 *              password : $21123247asd4as6ads1a3s45,    
 *              email : example@email.com,    
 *              avatar : default_img.png,    
 *              admin : false,    
 *            }
 *    OK2:
 *      description: OK
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg : user succesfelly created,
 *            token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmYxNzQyZDc5MDk1YTc2ODM0YzE5ZjMiLCJlbWFpbCI6Im1hcmNvc0BnbWFpbC5jb20iLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTY2MDA1MzkzNywiZXhwIjoxNjYwMDU3NTM3fQ.eGeQi4oJvUkayuVwlMmZbnwHQdJ5ZiOIF1tnlq5Zg3c,
 *            user : {
 *              _id : 62f6g46as7/8ewqc74657,
 *              name : Usuario,    
 *              password : $21123247asd4as6ads1a3s45,    
 *              email : example@email.com,    
 *              avatar : default_img.png,    
 *              admin : false,    
 *            }
 *    BadRequest:
 *      description: Bad Request
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg: credentials incorrect
 *    BadRequest2:
 *      description: Bad Request
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg: email already registered
 *    NotFound:
 *      description: Not Found
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg: User not found
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
