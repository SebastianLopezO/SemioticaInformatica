$(function () {
    var users=[]
    $("#generate").click(function () {

        $("#min").prop("disabled",true);
        $("#max").prop("disabled",true);

        let max=parseInt($("#max").val());
        let min=parseInt($("#min").val());
        do{
            var num=Math.round(Math.random()*(max-min)+min)
            if(users.indexOf(num)<0 || users.length==0){
                users.push(num);
                let age=Math.round(Math.random()*(40-1)+1)
                let gender=(["masculino","femenino"])[(Math.round(Math.random()*(2-1)+1))-1]
                let color=""
                gender=="masculino"?color="table-info":color="table-warning";

                mostrar(num,age,gender,color);
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

    function mostrar(user,age,gender,color){
            $("#contenido").append('<tr class="'+color+'" id="'+ (users.length) + '"> \
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

});