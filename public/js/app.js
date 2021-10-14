'use strict';

console.log('app.js is alive!')

let week;

function getDate() {
    let months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];;
    let date = new Date();

    let janOne = new Date(date.getFullYear(), 0, 1);
    let numberDays = Math.floor((date - janOne) / (24 * 60 * 60 * 1000));
    week = Math.ceil((date.getDay() + 1 + numberDays) / 7);

    document.getElementById('month').innerHTML = `${months[date.getMonth()]} ${date.getFullYear()}`;
    document.getElementById('weekText').innerHTML = ` Vecka ${week - 1}`;
}

function arrowBack() {
    week = week - 1;
    document.getElementById('weekText').innerHTML = ` Vecka ${week - 1}`;


}

function arrowForward() {
    week = week + 1;
    if (week == 54) {
        getDate();
    }
    document.getElementById('weekText').innerHTML = ` Vecka ${week - 1}`;
}