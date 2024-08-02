import { useState } from "react"

export default function TodaysMood() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [date, setDate] = useState(new Date())

    function handleChosenEmotion() {
        let currentEmotion = null;
    }
    
    return (
        <>
        <h2>{date.getDate()}th of {months[date.getMonth()]}</h2>
        <h2>How did you feel today?</h2>
        <div className="emotionsContainer">
            <button onClick={handleChosenEmotion} className="emotion" style={{background: "lightskyblue"}}>Sad</button>
            <div className="emotion" style={{background: "salmon"}}>Angry</div>
            <div className="emotion" style={{background: "mistyrose"}}>Unsatisfied</div>
            <div className="emotion" style={{background: "silver"}}>Hollow</div>
            <div className="emotion" style={{background: "gold"}}>Happy</div>
            <div className="emotion" style={{background: "rgb(178,209,200)"}}>Overwhelmed</div>
            <div className="emotion" style={{background: "coral"}}>Anxious</div>
        </div>
        <h2>Why?</h2>
        <textarea></textarea><br/>
        <button type='submit'>Add to calendar</button>
        </>
    )
}
