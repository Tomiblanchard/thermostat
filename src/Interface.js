thermostat = new Thermostat;
document.getElementById("temperature").innerHTML = thermostat.temperature;
function refreshTemperature() {
  document.getElementById("temperature").innerHTML = thermostat.temperature;
  }
