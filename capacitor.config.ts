import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.uno.game',
  appName: 'Uno',
  webDir: 'dist/browser',
  plugins: {
    SplashScreen: {
      backgroundColor: '#00000000',
    },
  },
};

export default config;
