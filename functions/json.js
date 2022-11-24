//url of the api
const API_URL = 'https://jsonplaceholder.typicode.com';

const xhr = new XMLHttpRequest();

//Callback that check the object xhr
function onRequestHandler(){
    //Check the status and state to control that the petition is correct
    if(this.readyState === 4 && this.status === 200){
        //0 = UNSET -> has not been called method open
        //1 = OPENED -> has been called method open
        //2 = HEADERS_RECEIVED -> it is calling method send
        //3 = LOADING -> it is receiving the the call
        //4 = DONE

        //Parser the JSON, we convert it into an array
        const data = JSON.parse(this.response);
        console.log(data);
    
        //To storage the information in html
        const HTMLResponse = document.querySelector('#json');

        //Iteration of the elements, we run the elements with map
        const template = data.map(user => ` <div class="json">${user.id} ${user.name} ${user.email}</div>`);

        HTMLResponse.innerHTML = `<ul>${template}</ul>`;
    }
}

xhr.addEventListener("load", onRequestHandler);
//The endpoint is manage with open
xhr.open('GET', `${API_URL}/users`);
xhr.send();



//Graphic Section
window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1",
        title: {
            text: "Simple Column Chart with Index Labels"
        },
        axisY: {
            includeZero: true
        },
        data: [{
            type: "bar", //change type to bar, line, area, pie...
            indexLabelFontColor: "#5A5757",
            indexLabelFontSize: 16,
            indexLabelPlacement: "outside",
            dataPoints: [
                { x: 10, y: 71 },
                { x: 20, y: 55 },
                { x: 30, y: 50 },
                { x: 40, y: 65 },
                { x: 50, y: 92, indexLabel: "\u2605 Highest" },
                { x: 60, y: 68 },
                { x: 70, y: 38 },
                { x: 80, y: 71 },
                { x: 90, y: 54 },
                { x: 100, y: 60 },
                { x: 110, y: 36 },
                { x: 120, y: 49 },
                { x: 130, y: 21, indexLabel: "\u2691 Lowest" }
            ]
        }]
    });

    chart.render();
}