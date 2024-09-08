import { useContext, useEffect } from "react"
import { AppContext } from "../src/App"
import Day from "./Day";

export default function UserCalendar() {
    const {calendar, setCalendar} = useContext(AppContext);
    const {todaysMoodRef} = useContext(AppContext);

    // useEffect(() => {
    //     if(calendar) {
    //         console.log(calendar);
    //         todaysMoodRef.current.style.display = 'none';
    //         // showCalendar();
    //         // console.log('showCalendar()');
    //     }
    // }, [calendar]);

    return(
        <div>
            {/* <ul>
                {calendar && calendar.calendar_info.map((day) => (
                <li key={day.id}>
                    {day.timestamp.slice(0, 10)}<br/>
                    {day.emotion}<br/>
                    {day.description}
                </li>
                ))}
            </ul> */}
            <h2>Your Calendar</h2>
            <div className="calendarDiv">
                <Day/>
            </div>
        </div>
    )
}