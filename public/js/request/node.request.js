let job;

function getNode(url, id, token){
    job = setInterval(() => {
        axios({
            method: "GET",
            url: `${url}/node/user/${id}`,
            data: '',
            headers: {'Content-Type': 'application/json', "token": `${token}`}
        }).then(function (id){
            $('#node-data').html(id.data);
        }).catch(err => {
            Swal.fire({
                title: `${err.response.data}`,
                icon: 'info',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: false,
                confirmButtonText: 'Ok',
                showLoaderOnConfirm: false,
                preConfirm: () => {
                    location.reload();
                }
            });
            NodeStop();
        })


        // let client = new HttpClient();
        // client.get(`${url}/node/user/${id}`, function (data) {
        //     $('#node-data').html(data);
        // })
    }, 5000);
}

function NodeStop(){
    clearInterval(job);
}