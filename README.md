# interview-app-pairing

This is a simple React Native app built with Expo. It has two screens:

1. Home
2. Talent List

The talent list screen gets some data from a GraphQL endpoint to show a list of talent. An item on the list can be tapped to view that profile.

# Getting Started

1. Clone this repository
2. Install the Expo CLI, if you don't already have it installed (`npm install -g expo-cli`)
3. `npm install`

## Install Device Simulators

Make sure you have either an Android or iOS simulator installed.

- [iOS](https://docs.expo.dev/workflow/ios-simulator/)
- [Android](https://docs.expo.dev/workflow/android-studio-emulator/)

## Running the app

```bash
npm run ios # or npm run android
```

To point the app to a local server running at `http://localhost:4000/api`, change the `USE_DEV_API` in the `.env` file to `true`.
