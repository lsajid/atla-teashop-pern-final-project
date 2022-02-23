import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


// const firebaseConfig = {
//   apiKey: "AIzaSyCHerbObx85_AxjyeAzsXnY9un2VMyrtpI",
//   authDomain: "pern-final.firebaseapp.com",
//   projectId: "pern-final",
//   storageBucket: "pern-final.appspot.com",
//   messagingSenderId: "654685212221",
//   appId: "1:654685212221:web:8e5d288e0525d287e52454",
//   measurementId: "G-B2JTZJP2PT"
// };