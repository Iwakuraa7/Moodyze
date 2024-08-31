import { useContext, useEffect, useState } from "react"
import { AppContext } from "../src/App";

export default function Calendar() {
    const [userId, setUserId] = useState(null);
    const {calendar, setCalendar} = useContext(AppContext)

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
                setCalendar((prevCalendar) => ({
                    ...prevCalendar,
                    ...data
                }));
            })
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if(calendar) {
            console.log(calendar);
        }
    }, [calendar]);

    function showCalendar() {
        for(let i = 0; i < calendar.length; i++) {

        }
    }

    return (
        <>
        <a onClick={getCalendarInfo}>Calendar</a>
        <p>{calendar.calendar_info[0].id}</p>
        </>
    )
}