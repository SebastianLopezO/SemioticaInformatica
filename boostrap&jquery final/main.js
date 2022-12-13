$(function () {
    generate()
    var asig=[]
    function generate(){
        var name="Estudiante"+(Math.round(Math.random()*(5-1)+1))
        var gen=(["Hombre","Mujer"])[Math.round(Math.random()*(2-1)+1)-1]
        var age=Math.round(Math.random()*(25-10)+10)
        var img=""
        if(gen=="Hombre"){
            age>=18?img="img/man.png":img="img/boy.png"
        }else{
            age>=18?img="img/woman.png":img="img/girl.png"
        }

        if(age>=18){
            var text="mayor"
        }else{
            var text="mayor"
        }
        $("#ContentStudent").html('  <div class="col-md-4"> \
                                        <img src="'+img+'" class="img-fluid rounded-start" alt="'+gen+'"> \
                                    </div> \
                                    <div class="col-md-8"> \
                                    <div class="card-body"> \
                                        <h5 class="card-title">'+name+'</h5> \
                                        <p class="card-text">El Estudiante con el nombre '+name+' es '+gen+' y tiene '+age+' años, por lo cual es '+text+' de edad </p> \
                                        <p class="card-text"><small class="text-muted">'+gen+'</small></p> \
                                    </div>');
    }

    $("#insert").click(function () {
        for(let i=0;i<10;i++){
            insert()
        }
    });

    $("#travel").click(function () {
        let sum=0
        const elems = document.querySelectorAll('#contenido tr');
        elems.forEach((elem) => {
            var data=elem.querySelector(".prom");
            var prom=parseInt(data.outerText)

            if (prom<3) {
                elem.classList.add("table-danger");
            }
            if (prom>=3) {
                elem.classList.add("table-success");
            }

            sum+=prom
        });
        promedio=parseFloat((sum/10).toFixed(2))
    });


    function insert(){
            let max=10;
            let min=1;
            do{
                var num=Math.round(Math.random()*(max-min)+min)
                if(asig.indexOf(num)<0 || asig.length==0){
                    asig.push(num);
                    let notas=[]
                    for(let x=0;x<Math.round(Math.random()*(5-1)+1);x++){
                        notas.push(parseFloat((Math.random()*(5-1)+1).toFixed(2)))
                    }
                    var sum=0
                    var prom=0
                    notas.forEach((elem)=> sum+=elem)
                    prom=parseFloat((sum/notas.length).toFixed(2))

                    $("#contenido").append('<tr class="" id="'+ (asig.length) + '"> \
                                                <th scope="row">'+ (asig.length) + '</th> \
                                                <td>Asignatura'+ num + '</td>\
                                                <td>Cantidad de Notas( '+notas.length+' ) : [ '+ notas + ' ] </td>\
                                                <td class="prom">'+ prom + '</td>\
                                            </tr>');
                    break;
                }else if(asig.length==max){
                    alerta("error","La lista ya esta llena");
                    break;
                }
            }while(true);
            $("#contenido").append('');
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