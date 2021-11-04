$(document).ready(function () {
    $('#new-user').on('click' ,function () {
        let base_url = $(this).data("url");
        const title = $('#new-user').text();
        CreateUser(title, base_url);
    });
})

function CreateUser(title, url){
    Swal.fire({
        title: `${title}`,
        html:
            '<div class="input-group mb-3">' +
            '<span class="label">E-mail</span>' +
            '</div>' +
            '<input type="email" id="user" class="form-control mb-3" aria-describedby="basic-addon1" placeholder="Email">' +
            '<div class="input-group mb-3">' +
            '<span class="label">Password</span>' +
            '</div>' +
            '<input type="password" id="pass" class="form-control mb-3" aria-describedby="basic-addon1" placeholder="Pasword">',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Create Account',
        showLoaderOnConfirm: true,
        preConfirm: () => {
            const email = `${$('#user').val()}`;
            const password = `${$('#pass').val()}`;
            if(email == '' || password == '') return Swal.fire(`Ops kolom tidak boleh kosong!`, '','warning');
            PostCreate(url, email, password);
        }
    });
}

function PostCreate(url, email, password){
    axios({
        method: "POST",
        url: `${url}/user/new`,
        data: {"email":`${email}`, 'password': `${password}`},
        headers: {'Content-Type': 'application/json'}
    }).then(function (id){
        Toast.fire({
            icon: 'success',
            title: `${id.data}`
        })
    }).catch(err => {
        Swal.fire(`${err.response.data}`, '','error');
    })
}