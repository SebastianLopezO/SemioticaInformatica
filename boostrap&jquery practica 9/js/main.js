$(function () {


    $("#name").blur(function () {
        preview();
    });
    
    $("#age").blur(function () {
        preview();
    });

    $("#sex").blur(function () {
        preview();
    });
    
    function preview(){
        let name=$("#name").val();
        let age=$("#age").val();
        let sex=$("#sex").val();
        let img=""
        let type=""

        if (age >= 18) {
            sex == "masculino" ? img = "img/man.png" : img = "img/woman.png"
            type = "Mayor"
        } else {
            sex == "masculino" ? img = "img/boy.png" : img = "img/girl.png"
            type = "Menor"
        }

        $("#preview").html('<div class="col d-flex justify-content-center align-items-center mb-5"> \
                                    <div class="card '+ sex + '" style="width: 18rem;"> \
                                        <img src="'+ img + '" class="card-img-top" alt = "..."> \
                                        <div class="card-body"> \
                                            <h5 class="card-title">'+ name + '</h5> \
                                            <p class="card-text">El usuario con el nombre '+ name + " con sexo " + sex + " tiene " + age + " años, por lo cual es " + type + '</p> \
                                            <a href="#" class="btn btn-primary">Ver</a> \
                                        </div> \
                                    </div > \
                                </div> ');
        return true;
    }

    $("#generate").click(function () {
        var age = Math.round(Math.random() * (30 - 10) + 10)
        var id = Math.round(Math.random() * (10 - 1) + 1)
        var sex = Math.round(Math.random() * (2 - 1) + 1)
        $("#age").val(age)
        $("#name").val("Usuario" + id)
        sex == 1 ? $("#sex").val("masculino") : $("#sex").val("femenino")
    });

    $("#send").click(function () {
        if ($("#name").val() != "" && $("#age").val() != "" && $("#sex").val() != "") {
            var data = { "name": $("#name").val(), "age": $("#age").val(), "sex": $("#sex").val() }
            sessionStorage.setItem(sessionStorage.length + 1, JSON.stringify(data))
            alerta('success', 'Los datos han sido almacenados, redirigiendo');

            setTimeout(() => { window.location.href = "usuario.html"; }, 4000);
        } else {
            alerta('error', 'Los datos son incorrectos');
        }
    });
    
    $("#clear").click(function () {
        sessionStorage.clear();
        alerta('success', 'Se han eliminado los datos');
        setTimeout(() => { location.reload()},4000);
    });
    
    if (window.location.href.includes("usuario.html")) {
        for (let x = 1; x <= sessionStorage.length; x++) {
            var elem = JSON.parse(sessionStorage[x])
            var img = ""
            var type = ""
            if (elem.age >= 18) {
                elem.sex == "masculino" ? img = "img/man.png" : img = "img/woman.png"
                type = "Mayor"
            } else {
                elem.sex == "masculino" ? img = "img/boy.png" : img = "img/girl.png"
                type = "Menor"
            }

            $("#contenedor").append('<div class="col d-flex justify-content-center align-items-center mb-5"> \
                                    <div class="card '+ elem.sex + '" style="width: 18rem;"> \
                                        <img src="'+ img + '" class="card-img-top" alt = "..."> \
                                        <div class="card-body"> \
                                            <h5 class="card-title">'+ elem.name + '</h5> \
                                            <p class="card-text">El usuario con el nombre '+ elem.name + " con sexo " + elem.sex + " tiene " + elem.age + " años, por lo cual es " + type + '</p> \
                                            <a href="#" class="btn btn-primary">Ver</a> \
                                        </div> \
                                    </div > \
                                </div> ');
        }
    }
    
    

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