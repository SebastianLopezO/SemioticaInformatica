$(function () {
    var users=[]
    $("#generate").click(function () {
        let max=parseInt($("#max").val());
        let min=parseInt($("#min").val());
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

    function mostrar(user,age,gender){
            $("#contenido").append('<tr class="" id="'+ (nums.length+1) + '"> \
                                        <th scope="row">'+ (nums.length+1) + '</th> \
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