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

    $("#reset").click(function () {
        users=[]
        $("#contenido").html("");
    });

    $("#cont").click(function () {
        let man=0
        let woman=0
        const elems = document.querySelectorAll('#contenido tr');
        elems.forEach((elem) => {
            if (elem.outerText.indexOf("femenino") > -1) {
                woman++;
                elem.classList.add("table-warning");
            }
            if (elem.outerText.indexOf("masculino") > -1) {
                man++;
                elem.classList.add("table-primary");
            }
        });

        cartel("Cantidad de Personas","Existen "+man+" hombres y "+woman+" mujeres")
    });

    function mostrar(user,age,gender){
            $("#contenido").append('<tr class="" id="'+ (users.length) + '"> \
                                        <th scope="row">'+ (users.length) + '</th> \
                                        <td>Usuario'+ user + '</td>\
                                        <td>'+ age + '</td>\
                                        <td>'+ gender + '</td>\
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
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
            }
        })
        ;
    }

});