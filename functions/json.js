//url of the api
const API_URL = 'https://jsonplaceholder.typicode.com';
const xhr = new XMLHttpRequest();
//Callback that check the object xhr
function onRequestHandler() {
    //Check the status and state to control that the petition is correct
    if (this.readyState === 4 && this.status === 200) {
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
        const template = data.map(user => `<div class="json">${user.id} ${user.name} ${user.email}</div>`);
        console.log(template);
        HTMLResponse.innerHTML = `<ul>${template}</ul>`;
    }
}
xhr.addEventListener("load", onRequestHandler);
//The endpoint is manage with open
xhr.open('GET', `${API_URL}/users`);
xhr.send();
