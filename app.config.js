import "dotenv/config";

export default {
  name: "Contact Interview App",
  slug: "contact-interview-app",
  description: "An example React Native app",
  privacy: "public",
  version: "1.0.0",
  platforms: ["ios", "android"],
  orientation: "portrait",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#000000",
  },
  updates: {
    fallbackToCacheTimeout: 1500,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: false,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#000000",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    useDevApi: process.env.USE_DEV_API == "true",
  },
};
