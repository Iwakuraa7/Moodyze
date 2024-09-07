import { useState, useContext } from "react"
import { AppContext } from "../src/App";

export default function Login() {
    const {isUser, setUser} = useContext(AppContext);
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
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            .then(response => response.json())
            .then(data => {
                if(data.success)
                    setUser(true);
                console.log(data.message);
            })
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <>
        <form onSubmit={login}>
            <label><strong>Email</strong></label>
            <br/><input
            type='text'
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            />
            <br/>
            <label><strong>Password</strong></label>
            <br/><input
            type='password'
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            />
            <br/>
            <button type='submit' style={{marginTop: "10px"}}>OK</button>
        </form>
        </>
    )
}
