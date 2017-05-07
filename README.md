# React Native Template QuickStart

**This requires react-native **0.43** or higher.**

It can be installed via git://..., http://..., file://... or any other URL supported by npm.

The default will be Installed via npm/yarn:

$`react-native init --template quickstart <new project name>`

File

$`react-native init --template file://quickstart-template-folder <new project name>`

Https

$`react-native init --template https://github.com/kevinold/react-native-template-quickstart.git <new project name>`

### Things to do after init

1. Run `node scripts/postInit.js` It will:
  - Install dev dependencies
  - Replace appKey in index files
2. Finish splash screen installation [as instructed](https://github.com/crazycodeboy/react-native-splash-screen#third-stepplugin-configuration)
3. Examine `.env` files for react-native-config
4. Run new app

### Things included
- [Redux](http://redux.js.org/) with [redux-persist](https://github.com/rt2zz/redux-persist#redux-persist)
- [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen#react-native-splash-screen)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-navigation](https://reactnavigation.org/docs/intro/) with some basic routing via redux


### Credits

This starter packaged based off of [react-native-template-starter](https://github.com/doomsower/react-native-template-starter) and [react-native-template-demo](https://github.com/mkonicek/react-native-template-demo).
