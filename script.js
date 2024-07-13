document.getElementById('searchBtn').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    const apiKey = '573758a4b8624c3471e856caf5bf86f5';  // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city').textContent = data.name + ', ' + data.sys.country;
                document.getElementById('description').textContent = data.weather[0].description;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
                document.querySelector('.weather-info').style.display = 'block';
            } else {
                alert('City not found!');
            }
        })
        .catch(error => console.error('Error:', error));
});
