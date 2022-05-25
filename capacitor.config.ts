import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.capacitor",
  appName: "Capacitor Sample",
  webDir: "out",
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.1.6:3000",
    cleartext: true,
  },
};

export default config;
