// import { useContext, useEffect, useRef, useState } from "react"
// import { AppContext } from "../src/App"
// import DayCard from "./DayCard";

// export default function Day() {
//     const month = ["","January","February","March","April","May","June","July","August","September","October","November","December"];
//     const d = new Date();
//     const currentYear = d.getFullYear();
//     const currentMonth = d.getMonth() + 1;

//     const {calendar, setCalendar} = useContext(AppContext);
//     const {todaysMoodRef} = useContext(AppContext);
//     const daysContainerRef = useRef(null);
//     const selectedDayCardRef = useRef(null);

//     const [selectedDay, setSelectedDay] = useState(null);
//     const [checkingMonth, setCheckingMonth] = useState(currentMonth);
//     const [yearData, setYearData] = useState({
//         year2024: {
//             9: { name: "September", days: [] },
//             10: { name: "October", days: [] },
//             11: { name: "November", days: [] },
//             12: { name: "December", days: [] }
//         }
//     });
    

//     // How to solve the problem:
//     // 1) Create an object that will consist all months with corresonding days. Something like:
//     //    {Year : {January : {...days}, February : {...days}, March : {...days}, April : {...days}, May : {...days},
//     //     June : {...days}, July : {...days}, August : {...days}, September : {...days},
//     //     October : {...days}, November : {...days}, December : {...days}.}
//     //            
//     // 2) Iterate through each element of the 'calendar.calendar info', and depending on the month timestamp, add to the corresponding month in the Year Object
//     // 3) Take the month of the current day, match it with the Year object, and depending on that just increment the index or decrement it.

//     function handleDayCheck(day) {
//         todaysMoodRef.current.style.display = 'none';
//         daysContainerRef.current.style.display = 'none';
//         setSelectedDay(
//             <DayCard dayInfo={day}/>
//         )
//     }
//     function handleBackToCalendar() {
//         todaysMoodRef.current.style.display = 'none';
//         daysContainerRef.current.style.display = 'flex';
//         setSelectedDay(null);
//     }

//     function loadNextMonthDays() {
//         setCheckingMonth(prevMonth => {
//             return prevMonth > 12 ? 1 : prevMonth + 1;
//         });
//     }
//     function loadPrevMonthDays() {
//         setCheckingMonth(prevMonth => {
//             return prevMonth < 1 ? 12 : prevMonth - 1;
//         });
//     }

//     // Store the days within corresponding year and month
//     useEffect(() => {
//         let septArr = [];
//         let octArr = [];
//         let novArr = [];
//         let decArr = [];
        
//         calendar.calendar_info.map((day) => {
//             const currentDay =
//             <div
//             key={day.id} onClick={() => handleDayCheck(day)} className="emotion"
//             style={{backgroundColor: day.color, width: "75px", height: "75px"}}>
//                 {day.emotion}
//             </div>
//             if(day.timestamp.slice(5, 7) === '09') {
//                 septArr.push(currentDay);
//             }
//             else if(day.timestamp.slice(5, 7) === '10') {
//                 octArr.push(currentDay);
//             }
//             else if(day.timestamp.slice(5, 7) === '11') {
//                 novArr.push(currentDay);
//             }
//             else if(day.timestamp.slice(5, 7) === '12') {
//                 decArr.push(currentDay);
//             }
//         });

//         setYearData(prevData => ({
//             ...prevData,
//             year2024: {
//                 9: { name: "September", days: septArr },
//                 10: { name: "October", days: octArr },
//                 11: { name: "November", days: novArr },
//                 12: { name: "December", days: decArr }
//             }
//         }));
//     }, [calendar.calendar_info])

//     return(
//         <>
//         <h2>{month[checkingMonth]}</h2>
//         <div id="daysContainer" className="calendarContainer" ref={daysContainerRef}>
//             {yearData[`year${currentYear}`][checkingMonth].days}
//         </div>
//         {/* {checkingMonth > currentMonth && */
//         <img onClick={loadPrevMonthDays} src="https://www.svgrepo.com/show/18507/back-button.svg" style={{width: "15px", height: "15px"}}></img>}
//         {/* {yearData[`year${currentYear}`][checkingMonth + 1].days && */
//         <img onClick={() => loadNextMonthDays()} src="https://icons.veryicon.com/png/o/internet--web/web-8/next-step-28.png" style={{width: "15px", height: "15px"}}></img>}
//         {selectedDay && <div id='selectedDayCard' ref={selectedDayCardRef}>
//             <img onClick={handleBackToCalendar} src="https://www.autodraw.com/assets/images/icons/tools/undo.svg"></img>
//             {selectedDay}
//         </div>}      
//         </>
//     )
// }