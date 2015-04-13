thermostat = new Thermostat;

document.getElementById("temperature").innerHTML = thermostat.temperature;

function refreshTemperature() {
  document.getElementById("temperature").innerHTML = thermostat.temperature;
  }

function incrementUp() {
  thermostat.incrementUp();
  refreshTemperature();
  }

function incrementDown() {
  thermostat.incrementDown();
  refreshTemperature();
  }
