const core = require('@actions/core');
const getVersion = require('./get-version');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const cargoFilePath = core.getInput('cargoFilePath');
    core.info(`Processing ${cargoFilePath}...`);
    core.setOutput('version', getVersion(cargoFilePath));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
