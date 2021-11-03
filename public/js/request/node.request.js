let job;

function getNode(base_url){
    job = setInterval(() => {
        let client = new HttpClient();
        client.get(`${base_url}/node`, function (data) {
            $('#node-data').html(data);
        })
    }, 2000);
}

function NodeStop(){
    clearInterval(job);
}