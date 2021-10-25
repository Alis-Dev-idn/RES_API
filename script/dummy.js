const axios = require('axios');

const base_url = `http://localhost:8000`
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzUxMzYzNzksImlhdCI6MTYzNTEzNjA3OX0.3dTSSBq-VPVrERN2okw9QAVmMD5gd-NJwMwKdo4_60g'

let n = 0;
let id_node;
let status_id;
// let post_status;

main();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function main(){
    get_data();
    console.log(id_node);
    console.log(status_id);
    // const job = setInterval(() => {
    //     n++;
    //     post_sensor(id_node, n)
    //     return n;
    // }, 5000);
}

function get_data(){
    axios({
        method: "GET",
        url: `${base_url}/get/id`,
        headers: {"token":`${token}`}
    }).then(function (id){
        const id_n = id.data;
        status_id = id.status;
        for (let i = 0; i < id_n.length ; i++) {
            id_node = `${id_n[0]._id}`
        }
    })
}

function post_sensor(id, number){
    axios({
        method: "POST",
        url: `${base_url}/sensor`,
        headers: {"token": `${token}`},
        data: {
                node_id: `${id}`,
                suhu: `${number}`,
                kelembaban: `${getRandomInt(85)}`,
                power: `${getRandomInt(20)}`
        }
    }).then(function (respond){

    });
}

