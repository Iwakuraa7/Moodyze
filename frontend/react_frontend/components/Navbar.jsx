import { useContext } from 'react'
import styles from './Navbar.module.css'
import { AppContext } from '../src/App'
import Logout from './Logout'
import Calendar from './Calendar'

export default function Navbar(props) {
    const {isUser, setUser} = useContext(AppContext);
    const {todaysMoodRef} = useContext(AppContext);
    const {calendarRef} = useContext(AppContext);

    function returnHome() {
        todaysMoodRef.current.style.display = 'block';
        calendarRef.current.style.display = 'none';
    }

    return (
        <>
        <nav>
            <a onClick={returnHome}>Home</a>
            {isUser ? <Calendar/> : null}
            {/* <a href="#">Calendar</a> */}
            <a href="#">Settings</a>
            {isUser ? <Logout/> : <a onClick={props.showLoginForm}>Login</a>}
        </nav>
        </>
    )
}