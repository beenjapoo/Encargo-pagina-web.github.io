$(document).ready(() => {
    $("#productoForm").validate({
      rules: {
        idProducto: {
          required: true,
          minlength: 1
        },
        nombreProducto: {
          required: true,
          minlength: 3
        },
        descripcionProducto: {
          required: true,
          minlength: 3
        },
        precioProducto: {
          required: true
        },
        descuentoSubscriptor: {
          required: true
        },
        descuentoPorOferta: {
          required: true
        }
      },
      messages: {
        idProducto: {
          required: "El campo id es obligatorio",
          minlength: "Debe tener un mínimo de 1 caracteres"
        },
        nombreProducto: {
          required: "El campo nombres es obligatorio",
          minlength: "Debe tener un mínimo de 3 caracteres"
        },
        descripcionProducto:{
            required: "El campo Descripcion es obligatorio",
            minlength: "Debe tener un mínimo de 3 caracteres"
        },
        precioProducto:{
            required: "El campo Precio es obligatorio",
            minlength: "Debe tener un mínimo de 1 caracteres"
        },
        descuentoSubscriptor: {
            required: "El campo Descuento Subscriptor es obligatorio",
        },
        descuentoPorOferta: {
            required: "El campo Descuento Oferta es obligatorio",
        }
      }
    });
  });
  