$('#logout').hide();
let idNode;
$(document).ready(function () {
    $('#login').on('click', function () {
        let base_url = $(this).data("url");
        const title = $('#login').text();
        if (title == 'Login') return UserLogin(title, base_url);
        if (title == 'Input New Node') return NodeInput(base_url, idNode);
    });

    $('#logout').on('click' ,function () {
        UserLogout();
    });
});

//========== function Login LogOut ===========//
function UserLogin(title, base_url){
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
        confirmButtonText: 'Login',
        showLoaderOnConfirm: true,
        preConfirm: () => {
            const email = `${$('#user').val()}`;
            const password = `${$('#pass').val()}`;
            if(email == '' || password == '') return Swal.fire(`Ops kolom tidak boleh kosong!`, '','warning');
            postLogin(email, password, base_url);
        }
    });
}

function postLogin(email, password, base_url) {
    axios({
        method: "POST",
        url: `${base_url}/user/login`,
        data: {"email":`${email}`, 'password': `${password}`},
        headers: {'Content-Type': 'application/json'}
    }).then(function (id){
        dataId(id.data);
        Swal.fire(`Id : ${id.data}`, '','info');
        getNode(base_url);
        $('#login').text('Input New Node');
        $('#logout').show();
    }).catch(err => {
        Swal.fire(`${err.response.data}`, '','error');
    })
}

function UserLogout() {
    Swal.fire({
        title: `Logout`,
        text: 'Ingin Keluar?',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Logout',
        showLoaderOnConfirm: true,
        preConfirm: () => {
            NodeStop();
            stopGetSensor();
            clearHtml()
            let cek = $('#node-data').text();
            if(cek != ''){
                clearHtml();
            }
        }
    });
}

function clearHtml(){
    $('#node-data').html('');
    $('#login').text('Login');
    $('#logout').hide();
    $('#sensor').html('');
    $('#name').html('');
}

function dataId(id){
    idNode = id;
}