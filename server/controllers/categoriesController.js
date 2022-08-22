let Categorie = require('../database/models/categorie')
let SubCategorie = require('../database/models/subcategorie')
let httpStatus = require('../helpers/httpStatus')
require('dotenv').config()


class categoriesController{
    static async getCategories (req, res){
        let categorie
        try {
            categorie = await Categorie.find({}).populate('subCategories')
        } catch (error) {
            console.log(error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            })
        }
        if (!categorie) {
            return res.status(httpStatus.NOT_FOUND).json({
                msg : 'categories not found'
            })
        }

        res.status(httpStatus.OK).json({
            categorie
        })
    }
    static async getOneCategories (req, res){
        let idParams = req.params.id
        let categorie
        try {
            categorie = await Categorie.findOne({_id : idParams}).populate('subCategories')
        } catch (error) {
            console.log(error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            })
        }
        if (!categorie) {
            return res.status(httpStatus.NOT_FOUND).json({
                msg : 'categorie not found'
            })
        }
        res.status(httpStatus.OK).json({
            categorie
        })
    }
    static async addCategorie (req, res){
        let {name} = req.body
        let categorie = new Categorie({
            name
        })

        try {
            await categorie.save()
            res.status(httpStatus.CREATED).json({
                msg : 'successful creation',
                categorie
            })
        } catch (error) {
            console.log(error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            })
        }
    }

    static async editCategorie (req, res){
        let idParams = req.params.id
        let { name } = req.body
        try {
            let categorie = await Categorie.updateOne({_id : idParams}, {name})
            res.status(httpStatus.OK).json({
                msg : 'successful edition'
            })
        } catch (error) {
            console.log(error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            })
        }

    }

    static async deleteCategorie (req, res){
        let {id} = req.params
        let categorie 
        try {
            categorie = await Categorie.deleteOne({ _id : id})
        } catch (error) {
            console.log(error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            })
        }
        if(categorie.deletedCount === 0){
            return res.status(httpStatus.BAD_REQUEST).json({
                msg : 'Error deleting, record not found'
            })
        }
        res.status(httpStatus.OK).json({
            msg : 'successful delete'
        })
    }

    

}


module.exports = categoriesController