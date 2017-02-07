

// Search for a specified string.
// window.onload = function search() {
	
//   var q = 'puppies';
//   var request = gapi.client.youtube.search.list({
//     q: q,
//     part: 'snippet'
//   });

//   request.execute(function(response) {
//     var str = JSON.stringify(response.result);
//     $('#search-container').html('<pre>' + str + '</pre>');
//   });
// }

var openWeatherMapID = 'e644ec33c271ca52c7361360d42d44b7'
var cityID = '4138106'
var ctx = $('#myChart');

function getData(openWeatherMapID, cityID, ctx) {
    var openWeatherMapData;
    $.getJSON('http://api.openweathermap.org/data/2.5/forecast/city?id='+cityID+'&APPID='+openWeatherMapID, function(json){
        openWeatherMapData = json;
        console.log(openWeatherMapData)
        createChart(ctx, openWeatherMapData)
    });
}

function createChart(ctx, openWeatherMapData) {

    var chart = new Chart (ctx, {
        type: 'line',
        data: { 

        },
        options: { scales: { yAxes: [{ ticks: { beginAtZero:true } }] } } 
    })
}

getData(openWeatherMapID, cityID, ctx)

// TESTER DATA
//==============================================
// labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//             datasets: [{
//                 label: 'Degrees \'F\'',
//                 data: [12, 9, 3, 5, 2, 3],
//                 backgroundColor: ['rgba(255, 99, 132, 0.2)'],
//                 borderColor: ['rgba(255,99,132,1)'],
//                 borderWidth: 1
//             }]