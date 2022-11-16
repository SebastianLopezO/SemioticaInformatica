$(function () {
    $("#append").click(function () {
        if ($("#name").val() != "" && $("#email").val() != "") {

            var paramsemail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            var paramsname = /^[a-zA-Z ]+(,[a-zA-Z ]+)*$/;

            if (paramsemail.test($("#email").val()) && paramsname.test($("#name").val())) {
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
                    id = row.length + 1


                    $("#contenido").append('\
                    <tr class=""> \
                        <th scope="row">'+ id + '</th> \
                        <td>'+ $("#name").val() + '</td>\
                        <td>'+ $("#email").val() + '</td>\
                        <td><button type="button" class="btn btn-warning">Modificar</button><button type="button" class="btn btn-danger">Eliminar</button></td> \
                    </tr> ');


                } else {
                    alerta('error', 'Su correo no es de dominio @gmail.com ni @hotmail.com')
                }
            } else if (!(paramsemail.test($("#email").val()))) {
                alerta('warning', 'El correo no es valido, tiene que tener un @');
            } else if (!(paramsname.test($("#name").val()))) {
                alerta('warning', 'El nombre no es valido, no puede tener numeros, solo texto');
            } else {
                alerta('warning', 'El correo o nombre no es valido');
            }
        } else {
            alerta('error', 'No se pudo agregar el elemento')
        }
    });

    $("#scooch").click(function () {
        const elems=document.querySelectorAll('#contenido tr');
        elems.forEach((elem)=> {
            if(elem.outerText.indexOf("gmail.com")>-1){
                elem.classList.add("table-warning");
            }
            if(elem.outerText.indexOf("hotmail.com")>-1){
                elem.classList.add("table-primary");
            }
        });
    });
    
    $("#reset").click(function () {
        const elems=document.querySelectorAll('#contenido tr');
        elems.forEach((elem)=> {
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
