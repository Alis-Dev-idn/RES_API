$('#dataTable').on('click', '.delete-node', function () {
    let id = $(this).data("id");
    let base_url = $(this).data("url");
    NodeDelete(base_url, id, token);
})

function NodeDelete(url, id, token){
    Swal.fire({
        title: `Hapus Node ${name}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'tetap hapus'
    }).then((result) => {
        if (result.isConfirmed) {
            axios({
                method: "DELETE",
                url: `${url}/node/${id}`,
                headers: {'Content-Type': 'application/json', "token": `${token}`}
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
                console.log(err.response.data)
            })
        }
    })
}