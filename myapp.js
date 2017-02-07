

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
var cityID = '5103564'
var ctx = $('#myChart');

function getData(openWeatherMapID, cityID, ctx) {
    var openWeatherMapData;
    $.getJSON('http://api.openweathermap.org/data/2.5/forecast/city?id='+cityID+'&APPID='+openWeatherMapID, function(json){
        openWeatherMapData = json;
        console.log(openWeatherMapData)
        createDatasets(openWeatherMapData)
    });
}

function createDatasets(openWeatherMapData) {
    labels = []
    data = []

    for (i = 0; i < openWeatherMapData.list.length; i++) {
        labels.push(openWeatherMapData.list[i].dt_txt)
    }
    for (i = 0; i < openWeatherMapData.list.length; i++) {
        // data.push(openWeatherMapData.list[i].main.temp)
        //converting to Farenheit
        data.push((openWeatherMapData.list[i].main.temp*(9/5))-459.67)
    }
    createChart(ctx, labels, data, openWeatherMapData);
}

function createChart(ctx, labels, data, openWeatherMapData) {

    var chart = new Chart (ctx, {

        type: 'line',
        data: { 
            labels: labels,
            datasets: [{
                label: 'Degrees \'Farenheit\' in '+openWeatherMapData.city.name,
                data: data,
            }]
        },
        options: { 
            scales: { 
                yAxes: [{
                    ticks: { 
                        beginAtZero:true 
                    } 
                }] 
            } 
        } 
    })
}

getData(openWeatherMapID, cityID, ctx)

// TESTER DATA
//==============================================
// labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//             datasets: [{
//
//                 label: 'Degrees \'F\'',
//                 data: [12, 9, 3, 5, 2, 3],
//                 backgroundColor: ['rgba(255, 99, 132, 0.2)'],
//                 borderColor: ['rgba(255,99,132,1)'],
//                 borderWidth: 1
//             }]