$(document).ready(()=>{
    $.validator.addMethod("rutChileno", function(value, element) {
        value = value.replace(/[.-]/g, "");
        if (value.length < 8 || value.length > 9) {
          return false;
        }
        
        var validChars = "0123456789K";
        var lastChar = value.charAt(value.length - 1).toUpperCase();
        if (validChars.indexOf(lastChar) == -1) {
          return false;
        }

        var rut = parseInt(value.slice(0, -1), 10);
        var factor = 2;
        var sum = 0;
        var digit;
        while (rut > 0) {
            digit = rut % 10;
            sum += digit * factor;
            rut = Math.floor(rut / 10);
            factor = factor === 7 ? 2 : factor + 1;
        }

        var dv = 11 - (sum % 11);
        dv = dv === 11 ? "0" : dv === 10 ? "K" : dv.toString();

        return dv === lastChar;
    }, "Por favor ingrese un RUT válido.");
    $("#usumantForm").validate({
        rules:{
            id:{
                required:true,
                minlength:1
            },
            rut:{
                required:true,
                rutChileno:true
            },
            nombres:{
                required:true,
                minlength:3
            },
            apellido:{
                required:true,
                minlength:3
            },
            email:{
                required:true,
                email:true
            },
            direccion:{
                required:true,
                minlength:3
            },
            password:{
                required:true,
                minlength:5
            },
            password2:{
                required:true,
                equalTo:"#password"
            },
        },
        messages:{
            id:{
                required:"El campo id es obligatorio",
                minlength:"Debe tener un minimo de 1 caracteres"
            },
            rut:{
                required:"El campo rut es obligatorio",
                minlength:"Debe tener un minimo de 8 caracteres"
            },
            nombres:{
                required:"El campo nombres es obligatorio",
                minlength:"Debe tener un minimo de 3 caracteres"
            },
            apellido:{
                required:"El campo apellidos es obligatorio",
                minlength:"Debe tener un minimo de 3 caracteres"
            },
            email:{
                required:"El campo email es obligatorio",
                email:"Debe ser un email valido"
            },
            direccion:{
                required:"El campo direccion es obligatorio",
                minlength:"Debe tener un minimo de 3 caracteres"
            }, 
            password:{
                required:"El campo contraseña es obligatorio",
                minlength:"Debe tener un minimo de 5 caracteres"
            },
            password2:{
                required:"El campo contraseña es obligatorio",
                equalTo:"Las contraseñas no coinciden"
            },
        },
    });
});