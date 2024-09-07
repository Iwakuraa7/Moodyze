import { useState } from "react"

export default function TodaysMood() {
    let currentEmotion;
    let color;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [date, setDate] = useState(new Date())

    function handleChosenEmotion(e) {
        currentEmotion = e.target.innerText;
        color = e.target.dataset.color;
        console.log(color);
        console.log(currentEmotion);
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
                if(data.success) {
                    console.log(data.message)
                } else {
                    console.log(data.message)
                }
            })
        } catch(err) {
            console.log(err)
        }
    }
    
    // TODO
    // Add CSS to emotion buttons, so that when clicked it lets users to know
    // Track whether user already saved todays emotion, in order to not let them create another emotion object in a single day
    // Continue working on Calendar component
    return (
        <>
        <h2>{date.getDate()}th of {months[date.getMonth()]}</h2>
        <h2>How did you feel today?</h2>
        <form onSubmit={handleTodaysEmotion}>
            <div className="emotionsContainer">
                <div onClick={handleChosenEmotion} className="emotion" data-color="lightskyblue" style={{background: "lightskyblue"}}>Sad</div>
                <div onClick={handleChosenEmotion} className="emotion" data-color="salmon" style={{background: "salmon"}}>Angry</div>
                <div onClick={handleChosenEmotion} className="emotion" data-color="mistyrose" style={{background: "mistyrose"}}>Unsatisfied</div>
                <div onClick={handleChosenEmotion} className="emotion" data-color="silver" style={{background: "silver"}}>Hollow</div>
                <div onClick={handleChosenEmotion} className="emotion" data-color="gold" style={{background: "gold"}}>Happy</div>
                <div onClick={handleChosenEmotion} className="emotion" data-color="rgb(178,209,200)" style={{background: "rgb(178,209,200)"}}>Overwhelmed</div>
                <div onClick={handleChosenEmotion} className="emotion" data-color="coral" style={{background: "coral"}}>Anxious</div>
            </div>
            <h2>Why?</h2>
            <textarea></textarea><br/>
            <button type='submit'>Add to calendar</button>
        </form>
        </>
    )
}
