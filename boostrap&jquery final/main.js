$(function () {
    generate()
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
        $("#ContentStudent").html('  <div class="col-md-4"> \
                                        <img src="'+img+'" class="img-fluid rounded-start" alt="'+gen+'"> \
                                    </div> \
                                    <div class="col-md-8"> \
                                    <div class="card-body"> \
                                        <h5 class="card-title">'+name+'</h5> \
                                        <p class="card-text">El Estudiante con el nombre '+name+' tiene '+age+' años y es '+gen+'</p> \
                                        <p class="card-text"><small class="text-muted">'+gen+'</small></p> \
                                    </div>');
    }
});