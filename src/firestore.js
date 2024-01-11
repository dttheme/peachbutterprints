import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAXCFz1I-SsgAd7KHUca3SzCrkcXdjYlCc",
    authDomain: "peachbutterprints-916e8.firebaseapp.com",
    projectId: "peachbutterprints-916e8",
    storageBucket: "peachbutterprints-916e8.appspot.com",
    messagingSenderId: "174667823567",
    appId: "1:174667823567:web:642f773e6a19051ddb3aba",
    measurementId: "G-3DBM2QNCC8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

async function getContacts () {
    const citiesCol = collection(db, 'contact');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}

getContacts().then((results)=> {
    console.log(results)
})


export async function postContact (data) {

    const contactCol = collection(db, 'contact');
    
    addDoc(contactCol, data).then((resp)=> {
        console.log('success', resp)
    }).catch((err)=> {
        console.warn(err)
    })
}

