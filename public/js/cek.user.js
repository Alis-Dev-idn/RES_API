$(document).ready(function () {
    $('#login').on('click', function () {
        const status = $('#login').text();
        if (status == 'Login') return Login(status);
        if (status == 'Input New Node') return input_node();
    });

    $('#logout_html').on('click', '.logout',function () {
        logout();
    });
});

function Login(value){
    Swal.fire({
        title: `${value}`,
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
            $('#login').text('Input New Node');
            $('#logout_html').html('<button type="button" class="btn btn-outline-danger mb-2 btn-sm add-data logout" data-url="<%- Base_Url %>">Logout</button>')
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