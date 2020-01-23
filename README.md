# Challenge
This app contains an scrollable list of users taken from `https://randomuser.me/` free API, these asers,
are being displayed in individual touchable card. Each of these cards has the avility to navigate to the user
profile (User details) once user touches it.

The App allows the user to take a picture to replace the existing.

## Developer notes:

The following packages were used to build the app:
- redux
- react-redux
- redux-thunk
- react-navigation
- react-native-camera
- react-native-vector-icons

 ## Before we start

 Please make sure you have `node`, `npm`, `git`, `cocoapods` installed correctly. In case you don't have any of those installed and setup, please go to [nodejs.org](https://nodejs.org/en/) to download and install the **Recommended For Most Users** version, or go [here](https://git-scm.com/downloads) to download `git`. `cocoapods` can be set up following this [link](https://facebook.github.io/react-native/docs/integration-with-existing-apps).


 ## Setup

 ### React Native

 Please refer the [React Native docs Getting Started guide](https://facebook.github.io/react-native/docs/getting-started) over the **React Native CLI Quickstart** tab. There, you can see all the detailed setup processs for `Android` and `iOS` platforms.

 ### This Project

 Once the above parts are setup, you can go ahead and clone the repo using the following command in your terminal:
```
git clone https://github.com/jevvilla/masglo.git
```
#### NOTE: please make sure you are in the correct branch, `dev` in this case.

Then go to the project root (project folder), and run the following commands to get the app running:

- `git checkout dev` to be placed in the correct branch.
- `npm install` - Install project dependencies.
- NOTE: don't forget install the Pod, from the root path run `cd ios && pod install`.
- `react-native run-ios` - Run the app locally.  By default this will run an iPhone X simulator.
- `react-native run-android` - install to the single Android device connected (if more than one are connected, you must specify the device with `—deviceId` which can be gotten from `adb devices`).

Once `react-native run-ios` or `react-native run-android` finish up, you should be able to see app running.
