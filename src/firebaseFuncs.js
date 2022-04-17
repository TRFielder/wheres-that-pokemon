import "./firebase-config.js";
import { initializeApp } from "firebase/app";

import {
    getFirestore,
    collection,
    query,
    where,
    getDocs
} from "firebase/firestore";

async function getCoordinates() {
    const coordsQuery = query(collection(getFirestore(), "pokemon-coordinates"), where("pokemon", "==", "togepi"));

    const querySnapshot = await getDocs(coordsQuery);
    querySnapshot.forEach((doc) => {
        console.table(doc.data());
    })
}


export {getCoordinates};