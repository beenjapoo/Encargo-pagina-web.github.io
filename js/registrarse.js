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
    
    $("#regForm").validate({
        
        rules:{
            rut:{
                required:true,
                rutChileno:true
            },
            nombres:{
                required:true,
                minlength:3
            },
            apellidos:{
                required:true,
                minlength:3
            },
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:5
            },
            password2:{
                required: true,
                equalTo: ".papa",
            },
            direccion:{
                required: true,
            }
            
        },
        messages:{
            rut:{
                required:"Debe llenar el campo rut",
                rutChileno:"Debe ingresar un rut valido"
            },
            nombres:{
                required:"Debe llenar el campo nombres",
                minlength:"debe tener un minimo de 3 carateres"
            },
            apellidos:{
                required:"Debe llenar el campo apellidos",
                minlength:"debe tener un minimo de 3 carateres"
            },
            email:{
                required:"Debe llenar el campo email",
                email:"debe ser un email valido"
            },
            password:{
                required:"Debe llenar el campo contraseña",
                minlength:"debe tener un minimo de 5 carateres"
            },
            password2:{
                required:"Debe confirma contraseña",
                equalTo: "Debe ser igual al campo contraseña",
            },
            direccion:{
                required:"El campo direccion es necesario"
            }

        }
    })
})