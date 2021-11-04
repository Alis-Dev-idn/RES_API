$('#stop-dummy').on('click', function (){
    StopDummy();
    $('#dummy').hide();
    getNode(Url, idNode, token);
    $('.edit-node').show();
    reset();
});

let dummyRun;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function RunDummy(url, id, token){
    let n = 0;
    dummyRun = setInterval(() => {
        n++;
        axios({
            method: "POST",
            url: `${url}/sensor`,
            headers: {"token": `${token}`},
            data: {
                node_id: `${id}`,
                suhu: `${n}`,
                kelembaban: `${getRandomInt(85)}`,
                power: `${getRandomInt(20)}`
            }
        }).then(function (respond){

        }).catch(err => {
            console.log(err.response.data);
        })
        return n;
    }, 2000);
}

function StopDummy(){
    clearInterval(dummyRun);
}