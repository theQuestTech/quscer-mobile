import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.thequesttech.quscer',
  appName: 'Quscer OS',
  webDir: 'www',
  server: {
    // Loads the live site directly, same approach as the desktop app.
    // Change this if you ever move to a custom domain.
    url: 'https://quscer-frontend.vercel.app',
    androidScheme: 'https'
  }
};

export default config;
