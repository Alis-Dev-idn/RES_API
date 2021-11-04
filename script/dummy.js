const axios = require('axios');
const {config} = require('dotenv');
config();

const base_url = `http://localhost:8000`

let n = 0;
let job;
let id_node;
let id_n;
let status_id;
let post_status;
let email_status;

main();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function main(){
    get_data();

    job = setInterval(() => {
        n++;
        if(status_id != 200){
            console.log(id_n);
            clearInterval(job);
        }else{
            post_sensor(id_node, n);
        }
        return n;
    }, 5000);
}

function get_data(){
    axios({
        method: "GET",
        url: `${base_url}/node/id`,
        headers: {"token":`${token}`}
    }).then(function (id){
        id_n = id.data;
        let data;
        status_id = id.status;
        for (let i = 0; i < id_n.length ; i++) {
            data = `${id_n[0]._id}`
        }
        id_node = data;
    }).catch(function (err){
        // if(status_id != 200) return console.log(err.response.status);
        email_status = err.response.status;
        console.log(email_status);
    })
}

function post_sensor(id, number){
    axios({
        method: "POST",
        url: `${base_url}/sensor/id`,
        headers: {"token": `${token}`},
        data: {
                node_id: `${id}`,
                suhu: `${number}`,
                kelembaban: `${getRandomInt(85)}`,
                power: `${getRandomInt(20)}`
        }
    }).then(function (respond){
        post_status = respond.status;
        if(post_status != 200){
            console.log(respond.data)
            clearInterval(job);
        }else{
            console.log(respond.data);
        }
    });
}

