import "./firebase-config.js";

import {
    getFirestore,
    collection,
    query,
    where,
    orderBy,
    limit,
    addDoc,
    getDocs,
    onSnapshot
} from "firebase/firestore";

async function getCoordinates(pokename) {
    const coordsQuery = query(collection(getFirestore(), "pokemon-coordinates"), where("pokemon", "==", `${pokename}`));

    const querySnapshot = await getDocs(coordsQuery);
    if(querySnapshot.empty) {
        console.log("There is no entry against this name in the database");
        return;
    }

    let rv;
    querySnapshot.forEach((doc) => {

        rv = {
            xmin: doc.data().xmin,
            xmax: doc.data().xmax,
            ymin: doc.data().ymin,
            ymax: doc.data().ymax
        }
    })
    return rv;

}

async function getTimestamp() {
    return(new Date());
}

async function uploadScore(name, time) {
    const data = {
        name: name,
        time: time
    }

    try {
        await addDoc(collection(getFirestore(), "scoreboard"), data);
    }
    catch(error) {
        console.error("Error writing score to Firebase Database", error);
    }
    
}

async function loadScoreboard() {
    const topTenQuery = query(collection(getFirestore(), "scoreboard"), orderBy("time", "asc"), limit(10));

    let scoreBoard = [];
    //Start listening to the query
    const querySnapshot = await getDocs(topTenQuery);
    querySnapshot.forEach((doc => {
        scoreBoard.push(doc.data());
    }));
    return scoreBoard;
}

export {
    getCoordinates,
    getTimestamp,
    uploadScore,
    loadScoreboard
};