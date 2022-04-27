const process = require('process');
const cp = require('child_process');
const path = require('path');
const getVersion = require('./get-version');

test('getVersion', () => {
  expect(getVersion('./fixtures/Cargo.toml')).toEqual('0.24.0');
});

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_CARGOFILEPATH'] = './fixtures/Cargo.toml';
  const ip = path.join(__dirname, 'index.js');
  const result = cp.execSync(`node ${ip}`, {env: process.env}).toString();
  console.log(">>>>>>>>>> got", result);
})
