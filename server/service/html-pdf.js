let pdf = require('html-pdf')
let fs = require('fs')
let User = require('../database/models/user')
let path = require('path')

class createPdf{
    constructor(template, products, nrOrder, address, date, user, city, province,){
        this.template = template || require.resolve('../template/factura2.html')
        this.products = products
        this.contenidoHtml = fs.readFileSync(this.template, 'utf-8')
        this.nrOrder = nrOrder
        this.address = address
        this.date = date
        this.organization = {
            name : 'Pretty Pets',
            address : 'Av. Palermo 2130',
            phone : "+543516662374",
            cuit : "33-45679812-123"
        }
        this.city = city || 'Córdoba'
        this.province = province || 'Córdoba'
        this.user = user

    }

    addPorducts(){
        const formateador = new Intl.NumberFormat("en", { style: "currency", "currency": "ARG" });
        let tabla = "";
        let subtotal = 0;
        for (const producto of this.products) {
            // Aumentar el total
            const totalProducto = producto.amount * producto.price;
            subtotal += totalProducto;
            // Y concatenar los productos
            tabla += `<tr>
            <td>${producto.name}</td>
            <td>${producto.amount}</td>
            <td>${formateador.format(producto.price)}</td>
            <td>${formateador.format(totalProducto)}</td>
            </tr>`;
        }

        return [tabla, subtotal]
    }

    async addData (){
        
        const formateador = new Intl.NumberFormat("en", { style: "currency", "currency": "ARG" });
        let [tabla, subtotal] = this.addPorducts()
        const impuestos = subtotal * 0.0
        const total =subtotal + impuestos;

        this.contenidoHtml = this.contenidoHtml.replace("{{NumberOrder}}", this.nrOrder);
        this.contenidoHtml = this.contenidoHtml.replace("{{order}}", this.nrOrder);
        this.contenidoHtml = this.contenidoHtml.replace("{{date}}", this.date);
        this.contenidoHtml = this.contenidoHtml.replace("{{nameUser}}", this.user.name);
        this.contenidoHtml = this.contenidoHtml.replace("{{userPhone}}", this.user.phone || "");
        this.contenidoHtml = this.contenidoHtml.replace("{{nameOrganization}}", this.organization.name);
        this.contenidoHtml = this.contenidoHtml.replace("{{addressOrganization}} ", this.organization.address);
        this.contenidoHtml = this.contenidoHtml.replace("{{numberOrganization}}", this.organization.phone);
        this.contenidoHtml = this.contenidoHtml.replace("{{CUITorganization}}", this.organization.cuit);
        this.contenidoHtml = this.contenidoHtml.replace("{{address}}", this.address);
        this.contenidoHtml = this.contenidoHtml.replace("{{city}}", this.city);
        this.contenidoHtml = this.contenidoHtml.replace("{{province}}", this.province);
        this.contenidoHtml = this.contenidoHtml.replace("{{tablaProductos}}", tabla);
 
        // Y también los otros valores
        
        this.contenidoHtml = this.contenidoHtml.replace("{{subtotal}}", formateador.format(subtotal));
        this.contenidoHtml = this.contenidoHtml.replace("{{impuestos}}", formateador.format(impuestos));
        this.contenidoHtml = this.contenidoHtml.replace("{{total}}", formateador.format(total));

        pdf.create(this.contenidoHtml).toFile(path.join(__dirname, `../recibe/${this.nrOrder}.pdf`), (error) => {
            if (error) {
                console.log("Error creando PDF: " + error)
            } else {
                console.log("PDF creado correctamente");
            }
        });
    }

    async getDataUser(idUser){
        let user
        try {
            user = await User.findById(idUser)
        } catch (error) {
            console.error(error)
            user = undefined
        }
        return user
    }

}

module.exports = createPdf