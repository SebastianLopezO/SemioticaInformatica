$(function () {
    var nums=[]
    $("#generate").click(function () {
        let max=$("#max").val();
        let min=$("#min").val();
        do{
            var num=Math.round(Math.random()*(max-min)+min)
            if(nums.indexOf()<0 || nums.length==0){
                nums.push();
                break;
            }else if(nums.length()==max){
                alerta("error","La lista ya esta llena");
            }
        }while(true);
    });

    for(let i=0;i<nums.length;i++){
        $("#contenedor").append('<tr class="" id="'+ (i+1) + '"> \
                                    <th scope="row">'+ (i+1) + '</th> \
                                    <td>'+ lista[i] + '</td>\
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