$(function () {
    $("#name").blur(function () {
        createemail();
    });

    $("#lastname").blur(function () {
        createemail();
    });

    $("#birth").blur(function () {
        createemail();
    });
    
    $("#domain").blur(function () {
        createemail();
    });

    function createemail() {
        if ($("#name").val() != "" && $("#lastname").val() != "" && $("#birth").val() != "" && $("#domain").val() != "") {
            $("#email").val(($("#name").val())[0] + ($("#lastname").val()).replace(/\s+/g, '')  + ($("#birth").val()).substr(0,4)+$("#domain").val());
        }
    }

    $("#append").click(function () {
        if ($("#name").val() != "" && $("#email").val() != "" && $("#lastname").val() != "" && $("#birth").val() != "") {

            var paramsemail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            var paramsname = /^[a-zA-Z ]+(,[a-zA-Z ]+)*$/;
            var paramsdate = /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;

            if (paramsemail.test($("#email").val()) && paramsname.test($("#name").val()) && paramsname.test($("#lastname").val()) && paramsdate.test($("#birth").val())) {
                if (($("#email").val()).indexOf("gmail.com") > -1 || ($("#email").val()).indexOf("hotmail.com") > -1) {
                    alerta('success', 'Se ha agregado correctamente')

                    var id = 0;

                    /* Colorear al Insertar
                    var color = "";
                    if (($("#email").val()).indexOf("gmail.com") > -1) {
                        color = "table-warning";
                    }

                    if (($("#email").val()).indexOf("hotmail.com") > -1) {
                        color = "table-primary";
                    }
                    */
                    const row = document.querySelectorAll("#contenido tr");
                    if (row.length > 0) {
                        id = parseInt(row[row.length - 1].id) + 1;
                    } else {
                        id = 1;
                    }



                    $("#contenido").append('\
                    <tr class="" id="'+ id + '"> \
                        <th scope="row">'+ id + '</th> \
                        <td>'+ $("#name").val() + '</td>\
                        <td>'+ $("#birth").val() + '</td>\
                        <td>'+ $("#email").val() + '</td>\
                        <td><button type="button" class="btn btn-warning m-1">Modificar</button><button type="button" class="btn btn-danger m-1">Eliminar</button></td> \
                    </tr> ');


                } else {
                    alerta('error', 'Su correo no es de dominio @gmail.com ni @hotmail.com')
                }
            } else if (!(paramsemail.test($("#email").val()))) {
                alerta('warning', 'El correo no es valido, tiene que tener un @');
            } else if (!(paramsname.test($("#name").val()))) {
                alerta('warning', 'El nombre no es valido, no puede tener numeros, solo texto');
            } else if (!(paramsname.test($("#lastname").val()))) {
                alerta('warning', 'El apellido no es valido, no puede tener numeros, solo texto');
            } else if (!(paramsdate.test($("#birth").val()))) {
                alerta('warning', 'la fecha de nacimiento no es valida, formato dd/mm/aaaa');
            } else {
                alerta('warning', 'Los datos son incorrectos');
            }
        } else {
            alerta('error', 'Datos vacios, no se pudo agregar el elemento p')
        }
    });

    $("#scooch").click(function () {
        const elems = document.querySelectorAll('#contenido tr');
        elems.forEach((elem) => {
            if (elem.outerText.indexOf("gmail.com") > -1) {
                elem.classList.add("table-warning");
            }
            if (elem.outerText.indexOf("hotmail.com") > -1) {
                elem.classList.add("table-primary");
            }
        });
    });

    $("#reset").click(function () {
        const elems = document.querySelectorAll('#contenido tr');
        elems.forEach((elem) => {
            elem.classList.remove("table-warning");
            elem.classList.remove("table-primary");
        });
    });


    function alerta(icon, title) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: icon,
            title: title
        })
    }
})
