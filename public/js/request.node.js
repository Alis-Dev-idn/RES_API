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

let job;
function getNode(){
    job = setInterval(() => {
        var client = new HttpClient();
        client.get('http://localhost:8000/node', function (data) {
            $('#node-data').html(data);
        })
    }, 1500);
}

function stop(){
    clearInterval(job);
}
