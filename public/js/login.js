'use strict';

function Login() {
    let inputEmail = document.getElementById('email').value;
    let inputPas = document.getElementById('pas').value;

    if (inputEmail == 'test@test.com' && inputPas == '123') {
        window.location.href = '../html/index.html';
    } else{
        alert('That is not a valid account');
    }
}
