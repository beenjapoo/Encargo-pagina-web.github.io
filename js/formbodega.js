$(document).ready(() => {
    $("#bodegaForm").validate({
        rules: {
            cantidadProd:{
                required: true,
                minlength: 1
            }
        },
        messages: {
            cantidadProd:{
                required: "El campo cantidad es obligatorio",
                minlength: "Debe tener un mínimo de 1 caracteres"
            }
        }
    });
});
    
