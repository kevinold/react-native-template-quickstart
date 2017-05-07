const execSync = require('child_process').execSync;
const fs = require('fs');
const path = require('path');

function installDevDependencies() {
  console.log('Adding dev dependencies for the project...');

  const devDependenciesJsonPath = path.resolve('devDependencies.json');
  const devDependencies = JSON.parse(fs.readFileSync(devDependenciesJsonPath));

  for (let depName in devDependencies) {
    const depVersion = devDependencies[depName];
    const depToInstall = depName + '@' + depVersion;
    console.log('Adding ' + depToInstall + '...');
    execSync(`yarn add ${depToInstall} -D`, { stdio: 'inherit' });
  }
}

function replaceAppKey() {
  execSync(`yarn add replace-in-file -D`, { stdio: 'inherit' });

  const appJsonPath = path.resolve('app.json');
  const appName = JSON.parse(fs.readFileSync(appJsonPath)).name;

  const replace = require('replace-in-file');

  replace.sync({
    files: [path.resolve('index.android.js'), path.resolve('index.ios.js')],
    from: 'react-native-template-quickstart',
    to: appName,
  });
}

function cleanup() {
  const devDependenciesJsonPath = path.resolve('devDependencies.json');
  fs.unlink(devDependenciesJsonPath);
}

function postTemplateInit() {
  installDevDependencies();
  replaceAppKey();
  cleanup();
}

postTemplateInit();
