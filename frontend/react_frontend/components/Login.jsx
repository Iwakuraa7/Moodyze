import { useState, useContext } from "react"
import { UserContext } from "../src/App";

export default function Login() {
    const [isUser, setUser] = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login(e) {
        e.preventDefault();
        try {
            fetch('http://localhost:8000/mail/login', {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data.message);
                setUser(true);
            })
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <>
        <form onSubmit={login}>
            <label>Email</label>
            <input
            type='text'
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            />
            <br/>
            <label>Password</label>
            <input
            type='password'
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            />
            <br/>
            <button type='submit'>Ok</button>
        </form>
        </>
    )
}