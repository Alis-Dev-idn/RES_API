$(document).ready(function (){
    //======== Get sensor ========//
    $('#dataTable').on('click','.node-action' ,function () {
        stopGetSensor();
        $('#sensor').html("");
        var name = $(this).data("name");
        const id = $(this).data("id");
        var base_url = $(this).data("url");
        $('#name').html(name);
        getSensor(base_url, id);
    })
    //======== End Get sensor ========//
})

let jobSensor;

function getSensor(base_url, id) {
    jobSensor = setInterval(() => {
        let client = new HttpClient();
        client.get(`${base_url}/sensor/${id}`, function (sensor) {
            $('#sensor').html(sensor);
        })
    }, 1000);
}

function stopGetSensor(){
    clearInterval(jobSensor);
}