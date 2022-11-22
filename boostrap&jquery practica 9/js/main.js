function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }
    patron = /^[a-zA-Z ]+(,[a-zA-Z ]+)*$/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

$(function () {
    $("#scooch").click(function () {
        var age=Math.round(Math.random()*(99-1)+1)
        $("#scooch").val(age)
    });

});