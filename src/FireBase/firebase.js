
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCL2xx_pdf2PtTT-VkX17AqnS6_YeNbcsg",
  authDomain: "proyecto-react-56663.firebaseapp.com",
  projectId: "proyecto-react-56663",
  storageBucket: "proyecto-react-56663.appspot.com",
  messagingSenderId: "680319051904",
  appId: "1:680319051904:web:f25ad8bf82f9d6f00b5e65"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);