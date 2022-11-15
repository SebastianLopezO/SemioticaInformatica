$(function () {
    $("#submit").click(function (elem) {
        elem.preventDefault();
        if ($("#password1").val() == $("#password2").val() && $("#password1").val() != "") {

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
                icon: 'success',
                title: 'Sesion iniciada'
            })

            setTimeout(function () {
                window.location.href = "index.html"
            }, 4000);


        } else {
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
                icon: 'error',
                title: 'No se ha podido iniciar sesion'
            })
        }
    })
    $("#append").click(function () {
        $("#contenedor").append('\
            <div class="col-md-4 d-flex justify-content-center align-items-center mb-5"> \
                <div class="card" style="width: 18rem; background-color: #202020;"> \
                    <img src="https://img.icons8.com/color/480/person-male.png" class="card-img-top" alt = "..."> \
                    <div class="card-body"> \
                        <h5 class="card-title">'+$("#name").val()+'</h5> \
                        <p class="card-text">'+$("#descripction").val()+'.</p> \
                        <a href="#" class="btn btn-primary">Ver</a> \
                    </div> \
                </div > \
            </div> \
        ');
    });
})