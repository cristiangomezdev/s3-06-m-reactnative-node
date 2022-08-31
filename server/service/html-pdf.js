let pdf = require('html-pdf')
let fs = require('fs')

class createPdf{
    constructor(template, products, nrOrder){
        this.template = template || require.resolve('../template/factura2.html')
        this.products = products
        this.contenidoHtml = fs.readFileSync(this.template, 'utf-8')
        this.nrOrder = nrOrder

    }

    addPorducts(){
        const formateador = new Intl.NumberFormat("en", { style: "currency", "currency": "ARG" });
        let tabla = "";
        let subtotal = 0;
        for (const producto of this.products) {
            // Aumentar el total
            const totalProducto = producto.cantidad * producto.precio;
            subtotal += totalProducto;
            // Y concatenar los productos
            tabla += `<tr>
            <td>${producto.descripcion}</td>
            <td>${producto.cantidad}</td>
            <td>${formateador.format(producto.precio)}</td>
            <td>${formateador.format(totalProducto)}</td>
            </tr>`;
        }

        return [tabla, subtotal]
    }

    addData(){
        const formateador = new Intl.NumberFormat("en", { style: "currency", "currency": "ARG" });
        let [tabla, subtotal] = this.addPorducts()
        const descuento = 0;
        const subtotalConDescuento = subtotal - descuento;
        const impuestos = subtotalConDescuento * 0.16
        const total = subtotalConDescuento + impuestos;

        this.contenidoHtml = this.contenidoHtml.replace("{{tablaProductos}}", tabla);
 
        // Y también los otros valores
        
        this.contenidoHtml = this.contenidoHtml.replace("{{subtotal}}", formateador.format(subtotal));
        this.contenidoHtml = this.contenidoHtml.replace("{{descuento}}", formateador.format(descuento));
        this.contenidoHtml = this.contenidoHtml.replace("{{subtotalConDescuento}}", formateador.format(subtotalConDescuento));
        this.contenidoHtml = this.contenidoHtml.replace("{{impuestos}}", formateador.format(impuestos));
        this.contenidoHtml = this.contenidoHtml.replace("{{total}}", formateador.format(total));

        pdf.create(this.contenidoHtml).toFile(`${this.nrOrder}.pdf`, (error) => {
            if (error) {
                console.log("Error creando PDF: " + error)
            } else {
                console.log("PDF creado correctamente");
            }
        });
    }

}

module.exports = createPdf