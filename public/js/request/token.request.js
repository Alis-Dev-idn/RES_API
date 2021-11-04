function GetToken(url, email, password, id) {
    axios({
        method: "POST",
        url: `${url}/token`,
        data: {"email":`${email}`, 'password': `${password}`},
        headers: {'Content-Type': 'application/json'}
    }).then(function (token){
        tokenId(token.data);
        getNode(url, id, `${token.data}`);
    }).catch(err => {
        Swal.fire(`${err.response.data}`, '','error');
    })
}