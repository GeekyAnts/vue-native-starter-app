
## Title

Sample Login App with Vue Native and Vuex with Validations

## Demo

<img alt="vue-native-starter app" src="gif/vue-native-starter-app.gif" width="260" height="400" />

## Installation

* **Clone and install packages**

```
git clone https://github.com/GeekyAnts/vue-native-starter-app.git
cd vue-native-starter-app
yarn
```
* **Run on iOS**
    * Run `react-native run-ios` in your terminal

- **Run on Android**
    * Make sure you have an `Android emulator` installed and running
    * Run `react-native run-android` in your terminal

## Libraries used

* **Packages Used**

    * native-base: 2.6.1
    * react: 16.3.1
    * react-native: 0.55.4
    * vue-native-core: 0.0.7
    * vue-native-helper: 0.0.8
    * vue-native-router: 0.0.1-alpha.3
    * vuelidate: 0.7.4
    * vuex: 3.0.1

## Folder structure
   The source files are located in `src` folder. All the assets file are under assets folder.
    All the screens which refer to the main route (Entry Points) are under `screen` and the compenents related to those screens are inside `components`.

## Usage of vuelidate and vuex 

* Validation
    Since vuelidate cannot identify the events for dirty natively. We can $touched for a partiuclar event to mark a field as dirty. For example in login.vue, for email field we have used `:on-blur="() => $v.emailValue.$touch()"` to mark a field as dirty when the field loses it's focus.

* Store
    We have used vuex for state management. The actions, mutations and the store are specified under `store/index.js`. The actions specify the action which are fired using `store.dispatch` method. The mutations specify the modifications on an object for a particular action.

## License

[MIT](http://opensource.org/licenses/MIT)
