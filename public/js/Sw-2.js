$(document).ready(function () {

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

    //======= POST DATA NODE =======//
    // $('#modal_input').on('click', function () {
    //     var base_url = $(this).data("url");
    //     Swal.fire({
    //         title: `Input New Node`,
    //         input: "text",
    //         inputAttributes: {
    //             autocapitalize: 'off'
    //         },
    //         showCancelButton: true,
    //         confirmButtonText: 'Input',
    //         showLoaderOnConfirm: true,
    //         preConfirm: (node) => {
    //             if (`${node}` === "" || null) return Swal.fire('nilai input tidak boleh kosong', '', 'info');
    //             const data = {
    //                 "name": `${node}`
    //             }
    //             fetch(`${base_url}/node`, {
    //                 method: 'POST',
    //                 body: JSON.stringify(data),
    //                 headers: {'Content-Type': 'application/json'}
    //             })
    //                 .then(response => {
    //                     Toast.fire({
    //                         icon: 'success',
    //                         title: `berhasil ditambahkan`
    //                     })
    //                     if (!response.ok) {
    //                         throw new Error(response.statusText)
    //                     }
    //                     return response.json()
    //                 })
    //                 .catch(error => {
    //                     Toast.fire({
    //                         icon: 'warning',
    //                         title: `${error}`
    //                     })
    //                 })
    //         }
    //     })
    // })
        //======= END POST DATA NODE =======//

        //======= EDIT NODE =======//
        $('#dataTable').on('click', '.edit-node', function () {
            var name = $(this).data("name");
            var id = $(this).data("id");
            var base_url = $(this).data("url");
            Swal.fire({
                title: `Edit ${name} ?`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'input data',
                denyButtonText: `delete node`,
            }).then((result) => {
                /* Input data Sensor */
                if (result.isConfirmed) {
                    Swal.fire({
                        title: `input data sensor ${name}`,
                        html:
                            '<input type="number" id="suhu" class="form-control mb-3" aria-describedby="basic-addon1" placeholder="Suhu" value="0">' +
                            '<input type="number" id="kelembaban" class="form-control mb-3" aria-describedby="basic-addon1" placeholder="Kelembaban" value="0">' +
                            '<input type="number" id="power" class="form-control mb-3" aria-describedby="basic-addon1" placeholder="Power" value="0">',
                        preConfirm: () => {
                            //Proses data input
                            var data = {
                                "node_id": `${id}`,
                                "suhu": `${$('#suhu').val()}`,
                                "kelembaban": `${$('#kelembaban').val()}`,
                                "power": `${$('#power').val()}`
                            }
                            if ($('#suhu').val() == "" || $('#kelembaban').val() == "" || $('#power').val() == "") {
                                Swal.fire({
                                    title: 'kolom tidak boleh ada yg kosong'
                                })
                            } else {
                                fetch(`${base_url}/sensor`, {
                                    method: 'POST',
                                    body: JSON.stringify(data),
                                    headers: {'Content-Type': 'application/json'}
                                })
                                    .then(response => {
                                        Toast.fire({
                                            icon: `success`,
                                            title: `berhasil ditambahkan`
                                        })
                                        if (!response.ok) {
                                            throw new Error(response.statusText)
                                        }
                                        return response.json()
                                    })
                                    .catch(error => {
                                        Toast.fire({
                                            icon: `warning`,
                                            title: `${error}`
                                        })
                                    })
                            }
                        }
                    })
                } else if (result.isDenied) {
                    //delete Node
                    Swal.fire({
                        title: `Hapus Node ${name}?`,
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'tetap hapus'
                    }).then((result) => {
                        //proses delete
                        if (result.isConfirmed) {
                            //proses delete
                            fetch(`${base_url}/node/${id}`, {
                                method: 'DELETE',
                                body: "",
                                headers: {'Content-Type': 'application/json'}
                            })
                                .then(response => {
                                    Toast.fire({
                                        icon: `success`,
                                        title: 'Berhasil Menghapus!'
                                    })
                                    if (!response.ok) {
                                        throw new Error(response.statusText)
                                    }
                                    return response.json()
                                })
                                .catch(error => {
                                    Toast.fire({
                                        icon: `warning`,
                                        title: `${error}`
                                    })
                                })
                        }
                    })
                }
            })
        })
})
        //======= END EDIT NODE =======//

