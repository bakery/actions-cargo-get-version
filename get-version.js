const fs = require('fs');
const toml = require('toml');

let getVersion = function (cargoFilePath) {
  const data = toml.parse(fs.readFileSync(cargoFilePath));
  return data.package.version;
};

module.exports = getVersion;
