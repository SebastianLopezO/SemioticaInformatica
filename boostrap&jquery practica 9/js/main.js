$(function () {
    $("#generate").click(function () {
        var age=Math.round(Math.random()*(30-10)+10)
        var id=Math.round(Math.random()*(10-1)+1)
        $("#age").val(age)
        $("#name").val("Usuario"+id)
    });

    $("#send").click(function () {
        sessionStorage.setItem("name", $("#name").val())
        sessionStorage.setItem("age", $("#age").val())
        window.location.href = "usuario.html";
    });

    $("#contenedor").append("<h1>test</h1>"+sessionStorage.name+sessionStorage.age);
});