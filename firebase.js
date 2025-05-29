import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9EHvsMAs_trN_07YtJKrfP4-6djNZLj8",
  authDomain: "prolink-cv.firebaseapp.com",
  projectId: "prolink-cv",
  storageBucket: "prolink-cv.firebasestorage.app",
  messagingSenderId: "1015294920674",
  appId: "1:1015294920674:web:a9be12ef0bc03aa3e99bbb",
  measurementId: "G-CRS8E0CDLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };