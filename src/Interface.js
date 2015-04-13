thermostat = new Thermostat;

document.getElementById("temperature").innerHTML = thermostat.temperature;

function refreshTemperature() {
  document.getElementById("temperature").innerHTML = thermostat.temperature;
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
