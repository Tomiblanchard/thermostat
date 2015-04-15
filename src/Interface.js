thermostat = new Thermostat;

refreshTemperature()

function refreshTemperature() {
  document.getElementById("temperature").innerHTML = thermostat.temperature;
  if(thermostat.temperature < 18){document.getElementById("temperature").style.color = "green"}
  else if(thermostat.temperature < 25){document.getElementById("temperature").style.color = "yellow"}
  else if(thermostat.temperature >= 25){document.getElementById("temperature").style.color = "red"}
  weatherData = $.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk", function(data) {
    var temp = weatherData.responseJSON.main.temp;
    var celsius = Math.round(temp) - 272;
    document.getElementById("APITemperature").innerHTML =  celsius;
  });
  }

function switchPowerSave() {
  if(document.getElementById("powersave").checked) {
    thermostat.powerSaveOn();
  }
  else {
    thermostat.powerSaveOff();
  }
}

function incrementUp() {
  thermostat.incrementUp();
  refreshTemperature();
  }

function incrementDown() {
  thermostat.incrementDown();
  refreshTemperature();
  }
