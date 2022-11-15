$(document).ready(function () {

    $("#registro").validate({
        rules: {
            email1:"required",
            email2:"required",
            password1:"required",
            password2:"required",
            email1: {
                required: true,
                email: true,
                depends: function (elem) {
                    return $("#email1").val() == $("#email2").val()
                }
            },
            email2: {
                required: true,
                email: true,
                depends: function (elem) {
                    return $("#email1").val() == $("#email2").val()
                }
            },
            password1: {
                required: true,
                minlength: 8,
                depends: function (elem) {
                    return $("#password1").val() == $("#password2").val()
                },
                passwordcheck:true
            },
            password2: {
                required: true,
                minlength: 8,
                depends: function (elem) {
                    return $("#password1").val() == $("#password2").val()
                },
                passwordcheck:true
            }
        },
        messages: {
            email1: {
                required: "Por favor, introduzca su Correo.",
                email: "Correo no valido",
                depends: "Los correos no coinciden"
            },
            email2: {
                required: "Por favor, introduzca su Correo.",
                email: "Correo no valido",
                depends: "Los correos no coinciden"
            },
            password1: {
                required: "Por favor proporcione una contraseña",
                minlength: "Su contraseña debe tener al menos 5 caracteres.",
                depends: "Las contraseñas no coinciden"
            },
            password2: {
                required: "Por favor proporcione una contraseña",
                minlength: "Su contraseña debe tener al menos 5 caracteres.",
                depends: "Las contraseñas no coinciden"
            },
            email1: "Por favor, introduce una dirección de correo electrónico válida",
            email2: "Por favor, introduce una dirección de correo electrónico válida"
        },
        submitHandler: function (form) {
            if($("#password1").val() == $("#password2").val()){
                form.submit();
            }
        }
    });
});

