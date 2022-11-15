$(function () {
    $("#append").click(function () {
        if ($("#name").val() != "" && $("#description").val() != "") {
        
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
                $("#contenedor").append('\
                    <tr> \
                        <td>'+$("#name").val()+'</td>\
                        <td>'+$("#email").val()+'</td>\
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
                icon: 'error',
                title: 'No se pudo agregar el elemento'
            })
        }
    });
})