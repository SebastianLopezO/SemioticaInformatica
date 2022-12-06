$(function () {
    var users=[]
    $("#generate").click(function () {
        $("#max").prop("disabled",true);

        let max=parseInt($("#max").val());
        let min=1;
        do{
            var num=Math.round(Math.random()*(max-min)+min)
            if(users.indexOf(num)<0 || users.length==0){
                users.push(num);
                let age=Math.round(Math.random()*(40-1)+1)
                let gender=(["masculino","femenino"])[(Math.round(Math.random()*(2-1)+1))-1]

                mostrar(num,age,gender);
                $("#number").val(num);
                break;
            }else if(users.length==max){
                alerta("error","La lista ya esta llena");
                break;
            }
        }while(true);
    });

    $("#filter").change(function () {
        alert("Filtrando");
        var option=$("#filter").val();

        const elems = document.querySelectorAll('#contenido tr');
        elems.forEach((elem) => {
            var id=elem.getAttribute('id');
            var data=elem.querySelector(".age");
            var age=parseInt(data.outerText)

            switch (option){
                case "":
                    $("#"+id+"").show();
                    break;
                case "mayores":
                    if(age>=18){
                        $("#"+id+"").show();
                    }else{
                        $("#"+id+"").hide();
                    }
                    break;
                case "menores":
                    if(age<18){
                        $("#"+id+"").show();
                    }else{
                        $("#"+id+"").hide();
                    }
                    break;
                case "mujeres":
                    if(elem.outerText.indexOf("femenino") > -1){
                        $("#"+id+"").show();
                    }else{
                        $("#"+id+"").hide();
                    }
                    break;
                case "hombres":
                    if(elem.outerText.indexOf("masculino") > -1){
                        $("#"+id+"").show();
                    }else{
                        $("#"+id+"").hide();
                    }
                    break;
                default:
                    $("#"+id+"").show();
                    break;
            }

        });
    });

    $("#reset").click(function () {
        users=[]
        $("#contenido").html("");
        $("#max").prop("disabled",false);
    });

    function disscolor(){
        const elems = document.querySelectorAll('#contenido tr');
        elems.forEach((elem) => {
            elem.classList.remove("table-success");
            elem.classList.remove("table-warning");
            elem.classList.remove("table-danger");
        });
    }

    $("#cont").click(function () {
        disscolor()
        let man=0
        let woman=0
        const elems = document.querySelectorAll('#contenido tr');
        elems.forEach((elem) => {
            if (elem.outerText.indexOf("femenino") > -1) {
                woman++;
                elem.classList.add("table-danger");
            }
            if (elem.outerText.indexOf("masculino") > -1) {
                man++;
                elem.classList.add("table-success");
            }
        });

        cartel("Cantidad de Personas","Existen "+man+" hombres y "+woman+" mujeres")
    });

    $("#travel").click(function () {
        disscolor()
        let major=0
        let minor=0
        const elems = document.querySelectorAll('#contenido tr');
        elems.forEach((elem) => {
            var data=elem.querySelector(".age");
            var age=parseInt(data.outerText)

            if(age<18){
                elem.classList.add("table-warning");
                minor++;
            }
            if(age>=18){
                elem.classList.add("table-danger");
                major++;
            }
        });

        cartel("Cantidad de Personas por Edad","Existen "+major+" mayores de edad y "+minor+" menores de edad")
    });

    function mostrar(user,age,gender){
            $("#contenido").append('<tr class="" id="'+ (users.length) + '"> \
                                        <th scope="row">'+ (users.length) + '</th> \
                                        <td class="user">Usuario'+ user + '</td>\
                                        <td class="age">'+ age + '</td>\
                                        <td class="gender">'+ gender + '</td>\
                                    </tr>')
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

    function cartel(title, text) {
        const Toast = Swal.fire({
            title: title,
            text: text,
            icon: 'info',
            showConfirmButton: true,
            timer: 5000,
            timerProgressBar: true,
        })
        ;
    }

});