import "../styles/ScoreCollection.css"
import { useEffect, useState } from "react";
import * as firebase from "../firebaseFuncs.js"

const ScoreCollection = (props) => {
    const [name, setName] = useState("");
    const [score, setScore] = useState();
    const [scoreBoard, setScoreBoard] = useState([]);
    const [form, setForm] = useState(true);

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
        firebase.loadScoreboard().then(result => {
            displayScores(result)
        });
    }

    const displayScores = (scores) => {
        setScoreBoard(
            [...scores]
        )
        setForm(false);
    }
    
    return(
        <>
            {form === true
            ? <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleChange}/>
                </label>
                <input id="submitBtn" type="submit" value="Submit"/>
            </form>
            : ""}

            {/*Do not show the scoreboard until a score has been submitted and the scoreboard acquired from cloud FireStore*/}
            
            {(Array.isArray(scoreBoard) && scoreBoard.length)
            ? <div className="scoreboard">
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Score</th>
                    </thead>
                    <tbody>
                    {scoreBoard.map(score => {
                        return(<tr>
                            <td>{score.name}</td>
                            <td>{score.time}</td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            : ""
                }
        </>
    )
}

export default ScoreCollection;