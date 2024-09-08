import { useContext, useEffect, useRef, useState } from "react"
import { AppContext } from "../src/App"
import DayCard from "./DayCard";

export default function Day() {
    const {calendar, setCalendar} = useContext(AppContext);
    const {todaysMoodRef} = useContext(AppContext);
    const {calendarRef} = useContext(AppContext);
    const daysContainerRef = useRef(null);
    const selectedDayCardRef = useRef(null);

    const [selectedDay, setSelectedDay] = useState(null);

    function handleDayCheck(day) {
        todaysMoodRef.current.style.display = 'none';
        daysContainerRef.current.style.display = 'none';
        setSelectedDay(
            <div>
                {day.description}
            </div>
        )
        selectedDayCardRef.current.style.display = 'block';
    }

    function handleBackToCalendar() {
        todaysMoodRef.current.style.display = 'none';
        daysContainerRef.current.style.display = 'block';
        setSelectedDay(null)
        selectedDayCardRef.current.style.display = 'none';
    }

    // useEffect(() => {
    //     selectedDay ? selectedDayCardRef.current.style.display = 'block' : selectedDayCardRef.current.style.display = 'none';
    // }, [selectedDay])

    return(
        <>
        <div id="daysContainer" className="calendarContainer" ref={daysContainerRef}>
            {calendar.calendar_info.map((day) => {
                return(<div key={day.id} onClick={() => handleDayCheck(day)} className="emotion" style={{backgroundColor: day.color, width: "75px", height: "75px"}}>{day.emotion}</div>)
            })}
        </div>
        {selectedDay && <div id='selectedDayCard' ref={selectedDayCardRef}>
            <img onClick={handleBackToCalendar} src="https://www.autodraw.com/assets/images/icons/tools/undo.svg"></img>
            {selectedDay}
        </div>}      
        </>
    )
}