$(function () {
    $("#append").click(function () {
        if ($("#name").val() != "" && $("#email").val() != "") {
            var paramsemail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            var paramsname = /^[a-zA-Z ]+(,[a-zA-Z ]+)*$/;
            if (paramsemail.test($("#email").val()) && paramsname.test($("#name").val())) {
                if (($("#email").val()).indexOf("gmail.com") > -1 || ($("#email").val()).indexOf("hotmail.com") > -1) {
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


                    var color="";
                    var id=0;
                    if(($("#email").val()).indexOf("gmail.com")>-1){
                        color="table-warning";
                    }

                    if(($("#email").val()).indexOf("hotmail.com")>-1){
                        color="table-primary";
                    }

                    const row=document.querySelectorAll("#contenido tr");
                    id=row.length+1

                    setTimeout(function () {
                        $("#contenido").append('\
                    <tr class="'+color+'"> \
                        <td>'+id+'</td> \
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
                        icon: 'error',
                        title: 'Su correo no es de dominio @gmail.com ni @hotmail.com'
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
                    icon: 'warning',
                    title: 'El nombre o correo no son validos'
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