$(function () {
    $("#append").click(function () {
        if ($("#name").val() != "" && $("#email").val() != "") {
            var paramsemail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            var paramsname = /^[a-zA-Z ]+(,[a-zA-Z ]+)*$/;
            if (paramsemail.test($("#name").val()) && paramsname.test($("#email").val())) {
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
                    icon: 'success',
                    title: 'Se ha agregado correctamente'
                })

                setTimeout(function () {
                    $("#contenido").append('\
                    <tr> \
                        <td>'+ $("#name").val() + '</td>\
                        <td>'+ $("#email").val() + '</td>\
                        <td><button type="button" class="btn btn-warning">Modificar</button><button type="button" class="btn btn-danger">Eliminar</button></td> \
                    </tr> ');
                }, 4000);
            } else {

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
                    icon: 'warning',
                    title: 'No es un correo valido'
                })
            }
        } else {
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
                icon: 'error',
                title: 'No se pudo agregar el elemento'
            })
        }
    });
})