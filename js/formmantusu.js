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
                requirid:true,
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
                equalTo:"#contraseña"
            },
        },
        messages:{
            id:{
                required:"el campo id es obligatorio",
                minlength:"debe tener un minimo de 1 caracteres"
            },
            rut:{
                required:"el campo rut es obligatorio",
                minlength:"debe tener un minimo de 8 caracteres"
            },
            nombres:{
                required:"el campo nombres es obligatorio",
                minlength:"debe tener un minimo de 3 caracteres"
            },
            apellido:{
                required:"el campo apellidos es obligatorio",
                minlength:"debe tener un minimo de 3 caracteres"
            },
            email:{
                required:"el campo email es obligatorio",
                email:"debe ser un email valido"
            },
            direccion:{
                required:"el campo direccion es obligatorio",
                minlength:"debe tener un minimo de 3 caracteres"
            }, 
            password:{
                required:"el campo contraseña es obligatorio",
                minlength:"debe tener un minimo de 5 caracteres"
            },
            password2:{
                required:"el campo contraseña es obligatorio",
                equalTo:"las contraseñas no coinciden"
            },
        },
    });
});