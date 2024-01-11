import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  admin,
} from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAXCFz1I-SsgAd7KHUca3SzCrkcXdjYlCc",
  authDomain: "peachbutterprints-916e8.firebaseapp.com",
  projectId: "peachbutterprints-916e8",
  storageBucket: "peachbutterprints-916e8.appspot.com",
  messagingSenderId: "174667823567",
  appId: "1:174667823567:web:642f773e6a19051ddb3aba",
  measurementId: "G-3DBM2QNCC8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export const postContact = async (data) => {
  const contactCol = collection(db, "contact");

  addDoc(contactCol, data).catch((err) => {
    console.warn(err);
  });
};

export const sendEmail = async (data) => {
  admin
    .firestore()
    .collection("mail")
    .add({
      to: "peachbutterprints@gmail.com",
      from: data.email,
      message: {
        subject: "Message from " + data.name,
        text: data.message,
      },
    })
    .catch((err) => {
      console.warn(err);
    });
};
