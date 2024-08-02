import { useContext } from 'react'
import styles from './Navbar.module.css'
import { UserContext } from '../src/App'
import Logout from './Logout'

export default function Navbar(props) {
    const [isUser, setUser] = useContext(UserContext)

    return (
        <>
        <nav>
            <a href="#">Home</a>
            <a href="#">Calendar</a>
            <a href="#">Settings</a>
            {isUser ? <Logout/> : <a onClick={props.showLoginForm}>Login</a>}
        </nav>
        </>
    )
}