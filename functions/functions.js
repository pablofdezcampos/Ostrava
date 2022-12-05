//Validation of form contact
window.addEventListener('load', function () {
    document.getElementById("form").addEventListener('submit', formValidation)
});

function formValidation(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    if (name.length == 0) {
        alert('The field name can not be empty');
        return;
    }

    var surname = document.getElementById('surname').value;
    if (surname.length == 0) {
        alert('The field surname can not be empty');
        return;
    }

    var validEmail = new RegExp('^[^@]+@[^@]+\.[a-zA-Z]{2,}$');
    var email = document.getElementById('email').value;
    if (!email.match(validEmail)) {
        alert('You must write a valid email');
        return;
    }

    var messaje = document.getElementById('messaje').value;
    if (messaje.length < 5) {
        alert('The messaje is to short');
        return;
    }

    this.submit();
}

//Counter Program
let count = 0;

document.getElementById('descreaseButton').onclick = function () {
    count -= 1;
    document.getElementById('countLabel').innerHTML = count;
}

document.getElementById('resetButton').onclick = function () {
    count = 0;
    document.getElementById('countLabel').innerHTML = count;
}

document.getElementById('increaseButton').onclick = function () {
    count += 1;
    document.getElementById('countLabel').innerHTML = count;
}