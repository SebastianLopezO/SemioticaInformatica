$(function () {
    $("#generate").click(function () {
        var age=Math.round(Math.random()*(30-10)+10)
        var id=Math.round(Math.random()*(10-1)+1)
        $("#age").val(age)
        $("#name").val("Usuario"+id)
    });

    $("#send").click(function () {
        if($("#name").val()!="" && $("#age").val()!=""){
            sessionStorage.setItem("name", $("#name").val())
            sessionStorage.setItem("age", $("#age").val())
            alerta('success', 'Los datos han sido almacenados, redirigiendo');
            
            setTimeout(() => {  window.location.href = "usuario.html"; }, 4000);
        }else{
            alerta('error', 'Los datos son incorrectos');
        }
    });

    $("#contenedor").append("<h1>test</h1>"+sessionStorage.name+sessionStorage.age);

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
});