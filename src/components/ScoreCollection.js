import "../styles/ScoreCollection.css"
import { useEffect, useState } from "react";
import * as firebase from "../firebaseFuncs.js"

const ScoreCollection = (props) => {
    const [name, setName] = useState("");
    const [score, setScore] = useState();

    useEffect(() => {
        firebase.getTimestamp().then(result => {
            setScore(result - props.startTime)
            let resultSeconds = (result - props.startTime) / 1000;
            let result_1DP = Math.round( resultSeconds * 10 ) / 10;
            console.log(`${result_1DP } seconds`);
            setScore(result_1DP)
        })
    },[])

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("A name was submitted: " + name)
        firebase.uploadScore(name, score);
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleChange}/>
            </label>
            <input id="submitBtn" type="submit" value="Submit"/>
        </form>
    )
}

export default ScoreCollection;