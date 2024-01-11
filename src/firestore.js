import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  admin,
} from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "../firebaseConfig";

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
