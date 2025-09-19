const tempfield = document.querySelector(".temp p");
const locationfield = document.querySelector(".time-location .location");
const dateandtimefield = document.querySelector(".time-location .datetime");
const conditionfield = document.querySelector(".condition .status");
const searchfield = document.querySelector(".search_area");
const form = document.querySelector('form');

form.addEventListener('submit', searchForLocation);

let target = "Kolkata";

const fetchResults = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=3bb20c3df642414aa2b141204251909&q=${targetLocation}&aqi=no`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;

    updateDetails(temp, locationName, time, condition);
}

function updateDetails(temp, locationName, time, condition) {
    tempfield.innerText = temp;
    locationfield.innerText = locationName;
    dateandtimefield.innerText = time;
    conditionfield.innerText = condition;
}

function searchForLocation(e) {
    e.preventDefault();
    target = searchfield.value;
    fetchResults(target);
}

fetchResults(target);



