$(function () {

    $("#generate").click(function () {
        var numero= Math.round(Math.random()*(10-1)+1);
        $("#number").val(numero);
    });

});