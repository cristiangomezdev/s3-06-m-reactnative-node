let createPdf = require('./html-pdf')
const productos = [
    {  
        descripcion: "Nintendo Switch",
        cantidad: 2,
        precio: 9000,
    },
    {
        descripcion: "Videojuego: Hollow Knight",
        cantidad: 1,
        precio: 150,
    },
    {
        descripcion: "Audífonos HyperX",
        cantidad: 5,
        precio: 1500,
    },
    {
        descripcion: "Audífonos HyperX",
        cantidad: 5,
        precio: 1500,
    },
    {
        descripcion: "Audífonos HyperX",
        cantidad: 5,
        precio: 1500,
    },
    {
        descripcion: "Audífonos HyperX",
        cantidad: 5,
        precio: 1500,
    },
    {
        descripcion: "Audífonos HyperX",
        cantidad: 5,
        precio: 1500,
    },
];
let template = require.resolve('../template/factura2.html')
let serviceHtmlPdf = new createPdf(template, productos, '12347asda4s7')


serviceHtmlPdf.addData()

