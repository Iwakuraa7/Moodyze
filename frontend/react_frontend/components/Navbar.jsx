import { useContext } from 'react'
import styles from './Navbar.module.css'
import { AppContext } from '../src/App'
import Logout from './Logout'
import Calendar from './Calendar'

export default function Navbar(props) {
    const {isUser, setUser} = useContext(AppContext)

    return (
        <>
        <nav>
            <a href="#">Home</a>
            {isUser ? <Calendar/> : null}
            {/* <a href="#">Calendar</a> */}
            <a href="#">Settings</a>
            {isUser ? <Logout/> : <a onClick={props.showLoginForm}>Login</a>}
        </nav>
        </>
    )
}