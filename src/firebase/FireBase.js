import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
import {getFirestore , collection, getDocs} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD6G8pEk7hnU4-DYXDGU3J1bqNQbdT9HvU",
  authDomain: "vikingo1703-20d19.firebaseapp.com",
  projectId: "vikingo1703-20d19",
  storageBucket: "vikingo1703-20d19.appspot.com",
  messagingSenderId: "511463702294",
  appId: "1:511463702294:web:394774182a18605c3ada37",
  measurementId: "G-DN9HH3QVHP"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
export const orderCollection = collection(db, 'orders')


export const GetProducts = async () => {
    
  const querySnapshot = await getDocs(collection(db, 'productos'));
  let listadeProductos = []

  querySnapshot.forEach(doc => {
    
     
      listadeProductos.push({
        id: doc.id,
        ...doc.data()})
  })
  
  return listadeProductos
}

