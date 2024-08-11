import { useEffect, useState } from "react"

export default function Calendar() {
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        try {
            fetch('http://localhost:8000/mail/get_user_id', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            .then(response => response.json())
            .then(data => {
                setUserId(data.user_id);
                console.log(data);
                console.log(data.user_id);
            })
        } catch(err) {
            console.log(err)
        }
    }, [])

    function getCalendarInfo() {
        try {
            fetch('http://localhost:8000/mail/get_user_calendar/'+userId)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <>
        <a onClick={getCalendarInfo}>Calendar</a>
        </>
    )
}