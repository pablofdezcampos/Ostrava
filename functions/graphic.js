//Third Party Component
window.onload = async function () {

    var chart;

    const API_URL = "https://api.open-meteo.com/v1/forecast?latitude=49.83&longitude=18.28&hourly=temperature_2m";

    const response = await fetch(API_URL);
    const chartData = await response.json();

    const time = [chartData].map((value) => value.hourly.time);
    const temperature = [chartData].map((value) => value.hourly.temperature_2m);

    temperature.map(function (v) {

        let totalTemperature1 = 0;
        let totalTemperature2 = 0;
        let totalTemperature3 = 0;
        let totalTemperature4 = 0

        let avgTemperature1 = 0;
        let avgTemperature2 = 0;
        let avgTemperature3 = 0;
        let avgTemperature4 = 0;

        for (var i = 0; i < 24; i++) {
            totalTemperature1 += v[i];
        }

        for (var i = 25; i < 50; i++) {
            totalTemperature2 += v[i];
        }

        for (var i = 51; i < 75; i++) {
            totalTemperature3 += v[i];
        }

        for (var i = 76; i < 101; i++) {
            totalTemperature4 += v[i];
        }

        avgTemperature1 = totalTemperature1 / 24;
        avgTemperature2 = totalTemperature2 / 24;
        avgTemperature3 = totalTemperature3 / 24;
        avgTemperature4 = totalTemperature4 / 24;

        chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            title: {
                text: "Daily High Temperature on Ostrava"
            },
            axisX: {
                valueFormatString: "DD MMM,YY"
            },
            axisY: {
                title: "Temperature (in °C)",
                suffix: " °C"
            },
            legend: {
                cursor: "pointer",
                fontSize: 16,
            },
            toolTip: {
                shared: true
            },
            data: [{
                name: "Ostrava City",
                type: "spline",
                yValueFormatString: "#0.## °C",
                showInLegend: true,
                dataPoints: [
                    { x: new Date(2022, 11, 6), y: avgTemperature1 },
                    { x: new Date(2022, 11, 7), y: avgTemperature2 },
                    { x: new Date(2022, 11, 8), y: avgTemperature3 },
                    { x: new Date(2022, 11, 9), y: avgTemperature4 },
                ]
            }
            ]
        });



    });

    chart.render();
}