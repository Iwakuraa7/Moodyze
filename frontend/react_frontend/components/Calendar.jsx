import { useContext, useEffect, useState } from "react"
import { AppContext } from "../src/App";
import UserCalendar from "./UserCalendar";

export default function Calendar() {
    const [userId, setUserId] = useState(null);
    const {calendar, setCalendar} = useContext(AppContext);

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
            })
        } catch(err) {
            console.log(err)
        }
    }, [])

    async function getCalendarInfo() {
        try {
            fetch('http://localhost:8000/mail/get_user_calendar/'+userId)
            .then(response => response.json())
            .then(data => {
                setCalendar(data);
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