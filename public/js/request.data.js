$(document).ready(function (){
    var HttpClient = function() {
        this.get = function(aUrl, aCallback) {
            var anHttpRequest = new XMLHttpRequest();
            anHttpRequest.onreadystatechange = function() {
                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                    aCallback(anHttpRequest.responseText);
            }

            anHttpRequest.open( "GET", aUrl, true );
            anHttpRequest.send( null );
        }
    }

    //======== Get Node ========//
    setInterval(() => {
        var client = new HttpClient();
        client.get('http://localhost:8000/get', function (data) {
            $('#node-data').html(data);
        })
    }, 1500)
    //======== End Get Node ========//

    //======== Get sensor ========//
    $('#dataTable').on('click','.node-action' ,function () {
        $('#sensor').html("");
        var name = $(this).data("name");
        const id = $(this).data("id");
        var base_url = $(this).data("url");
        $('#name').html(name);
        request(base_url, id);
    })

    function request(url, id){
        var client = new HttpClient();
        client.get(`${url}/get/sensor/${id}`, function (sensor) {
            $('#sensor').html(sensor);
        })
    }
    //======== End Get sensor ========//
})