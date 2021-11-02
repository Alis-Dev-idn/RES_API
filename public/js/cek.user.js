$(document).ready(function () {
    $('#login').on('click', function () {
        const status = $('#login').text();
        if (status == 'Login') return Login(status);
        if (status == 'Input New Node') return input_node();
    });

    $('#logout_html').on('click', '.logout',function () {
        clearInterval(stop());
        $('#node-data').html('');
        $('#login_html').show();
        $('#logout_html').html('');
    });
});

function Login(value){
    Swal.fire({
        title: `${value}`,
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
        confirmButtonText: 'Login',
        showLoaderOnConfirm: true,
        preConfirm: (node) => {
            const email = `${$('#user').val()}`;
            const password = `${$('#pass').val()}`;
            if(email == '' || password == '') return Swal.fire(`Ops kolom tidak boleh kosong!`, '','warning');
            getData(email, password);
            // fetch(`127.0.0.1:8000/id`, {
            //     method: 'POST',
            //     body: JSON.stringify(''),
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'user': `${email}`,
            //         'password': `${password}`
            //     }
            // }).then(response => {
            //     if(response.status != 200) return Swal.fire(`email ${email} tidak terdaftar!`, '','warning'), console.log(test());
            //     $('#login').text('Input New Node');
            //     $('#logout_html').html('<button type="button" class="btn btn-outline-danger mb-2 btn-sm add-data logout" data-url="<%- Base_Url %>">Logout</button>')
            // }).catch(error => {
            //     Swal.fire(`${error}`, '','warning')
            // })

        }
    });
}

function logout() {
    Swal.fire({
        title: `Logout`,
        text: 'Ingin Keluar?',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Login',
        showLoaderOnConfirm: true,
        preConfirm: () => {
            location.reload();
        }
    });
}

function input_node(){
    Swal.fire({
        title: `Input New Node`,
        html:
            '<div class="input-group mb-3">' +
            '<span class="label">E-mail</span>' +
            '</div>' +
            '<input type="email" id="suhu" class="form-control mb-3" aria-describedby="basic-addon1" placeholder="Email">' +
            '<div class="input-group mb-3">' +
            '<span class="label">Password</span>' +
            '</div>' +
            '<input type="password" id="kelembaban" class="form-control mb-3" aria-describedby="basic-addon1" placeholder="Pasword">',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Login',
        showLoaderOnConfirm: true,
        preConfirm: (node) => {

        }
    });
}

function getData(email, password) {
    axios({
        method: "POST",
        url: `http://127.0.0.1:8000/user/login`,
        data: {"email":`${email}`, 'password': `${password}`},
        headers: {'Content-Type': 'application/json'}
    }).then(function (id){
        Swal.fire(`Id : ${id.data}`, '','info');
        getNode();
        $('#login_html').hide();
        $('#logout_html').html('<button type="button" class="btn btn-outline-danger mb-2 btn-sm add-data logout" data-url="<%- Base_Url %>">Logout</button>');
    }).catch(err => {
        Swal.fire(`${err.response.data}`, '','warning');
    })
}