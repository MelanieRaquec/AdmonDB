import {FirebaseApp, getApp, getApps, initializeApp} from "@firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBNcr6Vdg0tGVNcAOh4XLgVSOgOrfjGo1Y",
    authDomain: "admon-project.firebaseapp.com",
    projectId: "admon-project",
    storageBucket: "admon-project.appspot.com",
    messagingSenderId: "236413734524",
    appId: "1:236413734524:web:beadbe09745e27c90783f9"
  };

let app: FirebaseApp;

if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
}else {
    app = getApp();
}

export { app }