import { useContext, useEffect, useRef, useState } from "react"
import { AppContext } from "../src/App"
import DayCard from "./DayCard";

export default function UserCalendar() {
    const month = ["","January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    const currentYear = d.getFullYear();
    const currentMonth = d.getMonth() + 1;

    const {calendar, setCalendar} = useContext(AppContext);
    const {todaysMoodRef} = useContext(AppContext);
    const daysContainerRef = useRef(null);
    const selectedDayCardRef = useRef(null);

    const [selectedDay, setSelectedDay] = useState(null);
    const [checkingMonth, setCheckingMonth] = useState(currentMonth);
    const [yearData, setYearData] = useState({
        year2024: {
            1: { name: "January", days: [] },
            2: { name: "February", days: [] },
            3: { name: "March", days: [] },
            4: { name: "April", days: [] },
            5: { name: "May", days: [] },
            6: { name: "June", days: [] },
            7: { name: "July", days: [] },
            8: { name: "August", days: [] },
            9: { name: "September", days: [] },
            10: { name: "October", days: [] },
            11: { name: "November", days: [] },
            12: { name: "December", days: [] }
        }
    });

    function handleDayCheck(day) {
        todaysMoodRef.current.style.display = 'none';
        daysContainerRef.current.style.display = 'none';
        setSelectedDay(
            <DayCard dayInfo={day}/>
        )
    }
    function handleBackToCalendar() {
        todaysMoodRef.current.style.display = 'none';
        daysContainerRef.current.style.display = 'flex';
        setSelectedDay(null);
    }

    function loadNextMonthDays() {
        setCheckingMonth(prevMonth => {
            return prevMonth === 12 ? 1 : prevMonth + 1;
        });
    }
    function loadPrevMonthDays() {
        setCheckingMonth(prevMonth => {
            return prevMonth === 1 ? 12 : prevMonth - 1;
        });
    }

    // Store the days within corresponding year and month
    useEffect(() => {
        let septArr = [];
        let octArr = [];
        let novArr = [];
        let decArr = [];
        
        calendar.calendar_info.map((day) => {
            const currentDay =
            <div
            key={day.id} onClick={() => handleDayCheck(day)} className="emotion"
            style={{backgroundColor: day.color, width: "75px", height: "75px"}}>
                {day.emotion}
            </div>
            if(day.timestamp.slice(5, 7) === '09') {
                septArr.push(currentDay);
            }
            else if(day.timestamp.slice(5, 7) === '10') {
                octArr.push(currentDay);
            }
            else if(day.timestamp.slice(5, 7) === '11') {
                novArr.push(currentDay);
            }
            else if(day.timestamp.slice(5, 7) === '12') {
                decArr.push(currentDay);
            }
        });

        setYearData(prevData => ({
            ...prevData,
            year2024: {
                1: { name: "January", days: [] },
                2: { name: "February", days: [] },
                3: { name: "March", days: [] },
                4: { name: "April", days: [] },
                5: { name: "May", days: [] },
                6: { name: "June", days: [] },
                7: { name: "July", days: [] },
                8: { name: "August", days: [] },
                9: { name: "September", days: septArr },
                10: { name: "October", days: octArr },
                11: { name: "November", days: novArr },
                12: { name: "December", days: decArr }
            }
        }));
    }, [calendar.calendar_info])

    
    return(
        <>
        <div>
            <h2>{month[checkingMonth]}</h2>
            <div className="calendarDiv">
                <div id="daysContainer" className="calendarContainer" ref={daysContainerRef}>
                    {yearData[`year${currentYear}`][checkingMonth].days.length === 0 ? <h3>No records in this month</h3> : yearData[`year${currentYear}`][checkingMonth].days}
                </div>
                {selectedDay && <div id='selectedDayCard' ref={selectedDayCardRef}>
                <img onClick={handleBackToCalendar} src="https://www.autodraw.com/assets/images/icons/tools/undo.svg"></img>
                {selectedDay}
                </div>}  
            </div>            
        </div>
        <div className="browseContainer">
        {<img onClick={loadPrevMonthDays} src="https://www.svgrepo.com/show/18507/back-button.svg" style={{width: "40px", height: "40px"}}></img>}
        {<img onClick={() => loadNextMonthDays()} src="https://icons.veryicon.com/png/o/internet--web/web-8/next-step-28.png" style={{width: "40px", height: "40px"}}></img>}        
        </div>
        </>
    )
}