import { useContext } from "react"
import { AppContext } from "../src/App"

export default function Day() {
    const {calendar, setCalendar} = useContext(AppContext)

    return(
        <div className="dayContainer">
            
        </div>
    )
}