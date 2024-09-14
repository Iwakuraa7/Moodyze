import { useState } from "react"

export default function TodaysMood() {
    const [currentEmotion, setCurrentEmotion] = useState(null);
    const [color, setColor] = useState(null);
    const [msg, setMsg] = useState(null);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [selectedEmotion, setSelectedEmotion] = useState(null);
    const [date, setDate] = useState(new Date())

    function handleChosenEmotion(e) {
        setCurrentEmotion(prevEmotion => {
            return prevEmotion === e.target.innerText ? null : e.target.innerText;
        });
        setColor(prevColor => {
            return prevColor === e.target.dataset.color ? null : e.target.dataset.color;
        });
        setSelectedEmotion(prevEmotion => {
            return prevEmotion === e.target.innerText ? null : e.target.innerText;
        });
    }

    function handleTodaysEmotion(e) {
        e.preventDefault();
        try {
            fetch('http://localhost:8000/mail/save_emotion', {
                method: 'POST',
                body: JSON.stringify({
                    emotion: currentEmotion,
                    color: color,
                    description: document.querySelector('textarea').value
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            .then(response => response.json())
            .then(data => {
                console.log(data.message);
                setMsg(data.message);
            })
        }
        catch(err) {
            console.log(err);
        }
    }

    // TODO
    // Track whether user already saved todays emotion, in order to not let them create another emotion object in a single day
    return (
        <>
        <h2>{date.getDate()}th of {months[date.getMonth()]}</h2>
        <h2>How did you feel today?</h2>
        {msg && <h3>{msg}</h3>}
        <form onSubmit={handleTodaysEmotion}>
            <div className="emotionsContainer">
                <div
                onClick={handleChosenEmotion}
                className="emotion"
                data-color="lightskyblue"
                style={{background: "lightskyblue", boxShadow: selectedEmotion === "Sad" ? "0px 0px 7px 1px #646cff" : ""}}>
                Sad
                </div>

                <div
                onClick={handleChosenEmotion}
                className="emotion" data-color="salmon"
                style={{background: "salmon", boxShadow: selectedEmotion === "Angry" ? "0px 0px 7px 1px #646cff" : ""}}>
                Angry
                </div>

                <div
                onClick={handleChosenEmotion}
                className="emotion" data-color="mistyrose"
                style={{background: "mistyrose", boxShadow: selectedEmotion === "Unsatisfied" ? "0px 0px 7px 1px #646cff" : ""}}>
                Unsatisfied
                </div>

                <div
                onClick={handleChosenEmotion}
                className="emotion" data-color="silver"
                style={{background: "silver", boxShadow: selectedEmotion === "Hollow" ? "0px 0px 7px 1px #646cff" : ""}}>
                Hollow
                </div>

                <div
                onClick={handleChosenEmotion}
                className="emotion" data-color="gold"
                style={{background: "gold", boxShadow: selectedEmotion === "Happy" ? "0px 0px 7px 1px #646cff" : ""}}>
                Happy
                </div>

                <div
                onClick={handleChosenEmotion}
                className="emotion" data-color="rgb(178,209,200)"
                style={{background: "rgb(178,209,200)", boxShadow: selectedEmotion === "Overwhelmed" ? "0px 0px 7px 1px #646cff" : ""}}>
                Overwhelmed
                </div>

                <div
                onClick={handleChosenEmotion}
                className="emotion" data-color="coral"
                style={{background: "coral", boxShadow: selectedEmotion === "Anxious" ? "0px 0px 7px 1px #646cff" : ""}}>
                Anxious
                </div>
            </div>
            <h2>Why?</h2>
            <textarea></textarea><br/>
            <button type='submit'>Add to calendar</button>
        </form>
        </>
    )
}
