let job;

function getNode(url, id){
    job = setInterval(() => {
        let client = new HttpClient();
        client.get(`${url}/node/user/${id}`, function (data) {
            $('#node-data').html(data);
        })
    }, 2000);
}

function NodeStop(){
    clearInterval(job);
}