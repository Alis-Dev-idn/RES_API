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

function NodeInput(url, id){
    Swal.fire({
        title: `Input New Node`,
        input: "text",
        inputAttributes: {
           maxlength: 10,
           autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Input',
        showLoaderOnConfirm: true,
        preConfirm: (node) => {
            if (`${node}` === "" || null) return Swal.fire('nilai input tidak boleh kosong', '', 'info');
            const data = {
                "user": `${id}`,
                "name": `${node}`
            }
            axios({
                method: "POST",
                url: `${url}/node`,
                data: data,
                headers: {'Content-Type': 'application/json'}
            }).then(function (id){
                Toast.fire({
                   icon: 'success',
                   title: `${id.data}`
                })
            }).catch(err => {
                Toast.fire({
                   icon: 'error',
                   title: `${err.response.data}`
                })
            })
        }
    })
}