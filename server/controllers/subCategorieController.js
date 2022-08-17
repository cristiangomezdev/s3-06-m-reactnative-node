const Categorie = require('../database/models/categorie')
const SubCategorie = require('../database/models/subcategorie')
const httpStatus = require('../helpers/httpStatus')

class subCategorieController {
    static async addSubcategorie (req, res){
        let {name, image, categorieId} = req.body
        let subCat = new SubCategorie({
            name,
            image : image || "default-image.png"
        })

        try {
            await subCat.save()
            let cate = await Categorie.findOne({_id : categorieId})
            
            cate.subCategories.push(subCat._id)
            await cate.save()

            res.status(httpStatus.OK).json({
                subCat
            })
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : error
            })
        }
    }

    static async getSubCategories (req, res){
        try {
            let subCat = await SubCategorie.find({})
            res.status(httpStatus.OK).json({
                SubCategories : subCat
            })
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                error
            })
        }
    }
    static async getOneSubCategorie (req, res){
        let idParams = req.params.id
        try {
            let subCat = await SubCategorie.findOne({_id : idParams})
            res.status(httpStatus.OK).json({
                SubCategorie : subCat
            })
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                error
            })
        }
    }

    static async editSubCategorie (req, res){
        let {id} = req.params
        let {name, image } = req.body

        try {
            let subCategorie = await SubCategorie.findByIdAndUpdate(id, { name, image})
            res.status(httpStatus.OK).json({
                subCategorie
            })
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                error
            })
        }
    }

    static async deleteSubCategorie (req, res){
        let {id} = req.params

        try {
            let subCategorie = await SubCategorie.deleteOne({ _id : id})
            res.status(httpStatus.OK).json({
                subCategorie
            })
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                error
            })
        }
    }


}


module.exports = subCategorieController