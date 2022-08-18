let Categorie = require('../database/models/categorie')
let SubCategorie = require('../database/models/subcategorie')
let httpStatus = require('../helpers/httpStatus')
require('dotenv').config()


class categoriesController{
    static async getCategories (req, res){
        try {
            let categorie = await Categorie.find({}).populate('subCategories')
            res.status(httpStatus.OK).json({
                categorie
            })
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            })
        }
    }
    static async getOneCategories (req, res){
        let idParams = req.params.id
        try {
            let categorie = await Categorie.findOne({_id : idParams}).populate('subCategories')
            res.status(httpStatus.OK).json({
                categorie
            })
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            })
        }
    }
    static async addCategorie (req, res){
        let {name} = req.body
        let categorie = new Categorie({
            name
        })

        try {
            await cate.save()
            res.status(httpStatus.OK).json({
                msg : 'successful category creation',
                categorie
            })
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            })
        }
    }

    static async editCategorie (req, res){
        let idParams = req.params.id
        let { name } = req.body
        console.log(name)
        try {
            let categorie = await Categorie.updateOne({_id : idParams}, {name})
            res.status(httpStatus.OK).json({
                msg : 'successful edition'
            })
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            })
        }

    }

    static async deleteCategorie (req, res){
        let {id} = req.params

        try {
            let categorie = await Categorie.deleteOne({ _id : id})
            res.status(httpStatus.OK).json({
                msg : 'successful delete'
            })
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            })
        }
    }

    

}


module.exports = categoriesController