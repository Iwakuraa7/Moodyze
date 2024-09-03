import { useContext, useEffect, useState } from "react"
import { AppContext } from "../src/App";
import UserCalendar from "./UserCalendar";

export default function Calendar() {
    const [userId, setUserId] = useState(null);
    const {calendar, setCalendar} = useContext(AppContext);
    const {todaysMoodRef} = useContext(AppContext);

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
                // console.log(data);
                // console.log(data.user_id);
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
                // setCalendar((prevCalendar) => ({
                //     ...prevCalendar,
                //     ...data
                // }));
            })
        } catch(err) {
            console.log(err)
        }
    }

    // useEffect(() => {
    //     if(calendar) {
    //         console.log(calendar);
    //         todaysMoodRef.current.style.display = 'none';
    //         // showCalendar();
    //         // console.log('showCalendar()');
    //     }
    // }, [calendar]);

    // function showCalendar() {
    //     for(let i = 0; i < calendar.calendar_info.length; i++) {
    //         return(
    //             <>
    //             <div>
    //                 id: {calendar.calendar_info[i].id}   
    //                 timestamp: {calendar.calendar_info[i].timestamp}
    //                 emotion: {calendar.calendar_info[i].emotion}
    //                 description: {calendar.calendar_info[i].descpription}
    //             </div>
    //             </>
    //         )            
    //     }
    // }

    return (
        <>
        <a onClick={getCalendarInfo}>Calendar</a>
        {/* <>{calendar ? console.log('+calendar info') : console.log('-calendar info')}</> */}
        </>
    )
}