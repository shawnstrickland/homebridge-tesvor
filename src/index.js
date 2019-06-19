const ChamberlainAccessory = require('./weback');
const instance = require('./instance');

module.exports = homebridge => {
  instance.homebridge = homebridge;

  homebridge.registerAccessory(
    'homebridge-chamberlain',
    'Chamberlain',
    ChamberlainAccessory
  );
};