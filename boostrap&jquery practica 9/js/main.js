$(function () {
    $("#generate").click(function () {
        var age=Math.round(Math.random()*(30-10)+10)
        var id=Math.round(Math.random()*(10-1)+1)
        var sex=Math.round(Math.random()*(2-1)+1)
        $("#age").val(age)
        $("#name").val("Usuario"+id)
        sex==1?$("#sex").val("masculino"):$("#sex").val("femenino")
    });

    $("#send").click(function () {
        if($("#name").val()!="" && $("#age").val()!="" && $("#sex").val()!=""){
            sessionStorage.setItem("name", $("#name").val())
            sessionStorage.setItem("age", $("#age").val())
            sessionStorage.setItem("sex", $("#sex").val())
            alerta('success', 'Los datos han sido almacenados, redirigiendo');
            
            setTimeout(() => {  window.location.href = "usuario.html"; }, 4000);
        }else{
            alerta('error', 'Los datos son incorrectos');
        }
    });

    var img=""
    var type=""
    var sex=""
    if(sessionStorage.age>=18){
        sessionStorage.sex=="masculino"?img="img/man.png":img="img/woman.png"
        type ="Mayor"
    }else{
        sessionStorage.sex=="masculino"?img="img/boy.png":img="img/girl.png"
        type ="Menor"
    }

    $("#contenedor").append('\
    <div class="col d-flex justify-content-center align-items-center mb-5"> \
        <div class="card" style="width: 18rem; background-color: #202020;"> \
            <img src="'+img+'" class="card-img-top" alt = "..."> \
            <div class="card-body"> \
                <h5 class="card-title">'+ sessionStorage.name + '</h5> \
                <p class="card-text">El usuario con el nombre '+ sessionStorage.name +" con sexo "+sessionStorage.sex+" tiene "+ sessionStorage.age +" años, por lo cual es "+type+ '</p> \
                <a href="#" class="btn btn-primary">Ver</a> \
            </div> \
        </div > \
    </div> ');

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