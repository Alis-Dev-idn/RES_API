$('#dataTable').on('click', '.edit-node', function () {
    let name = $(this).data("name");
    let id = $(this).data("id");
    let url = $(this).data("url");
    Swal.fire({
        title: `Edit ${name} ?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Start Simulation',
        denyButtonText: `edit Name`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            RunDummy(url, id, token);
            NodeStop();
            $('.edit-node').hide();
            $('#dummy').show();
            $('#name-node').text(`Simulation Data ${name}`);
            start();
        } else if (result.isDenied) {

        }
    })
});

//timer
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let cron;

function start() {
    cron = setInterval(() => { timer(); }, 10);
}

function pause() {
    clearInterval(cron);
}

function reset() {
    clearInterval(cron);
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
}

function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
}

function returnData(input) {
    return input > 10 ? input : `0${input}`
}
