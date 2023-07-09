// task-07
const country = document.getElementById('country');
const cities = document.getElementById('cities');
const text = document.getElementById('text');

function getCities(country) {
    const cities = {
        ger: ['Berlin', 'Munich', 'Hamburg'],
        usa: ['New York', 'Los Angeles', 'Chicago'],
        ukr: ['Kyiv', 'Lviv', 'Odesa']
    };

    return cities[country];
}

function displayCities(citiesList) {
    cities.innerHTML = '';

    citiesList.forEach(function (city) {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        cities.appendChild(option);
    });
}

country.addEventListener('change', function () {
    const selectedCountry = country.value;
    const cities = getCities(selectedCountry);
    displayCities(cities);
    displaySelectedInfo(selectedCountry, '');
});

function displaySelectedInfo(country, city) {
    text.textContent = `Selected: ${getCountryName(country)}, ${city}`;
}

cities.addEventListener('change', function() {
    const selectedCountry = country.value;
    const selectedCity = cities.value;
    displaySelectedInfo(selectedCountry, selectedCity);
  });

function getCountryName(country) {
    if(country == 'ger') return 'Germany';
    if(country == 'ukr') return 'Ukraine';
    if(country == 'usa') return 'USA';
}