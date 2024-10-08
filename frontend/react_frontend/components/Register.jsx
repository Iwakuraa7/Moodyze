import { useState, useRef, useContext } from "react";
import { AppContext } from "../src/App";

export default function Register() {
    const {isUser, setUser} = useContext(AppContext)
    const [message, setMessage] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conf, setConf] = useState('');
  
    const emailRef = useRef(null);
    const pswrdRef = useRef(null);
    const confRef = useRef(null);
  
    async function register(e) {
      e.preventDefault();
      try {
        fetch('http://localhost:8000/mail/register', {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            password: password,
            confirmation: conf
          })
        })
        .then(response => response.json())
        .then(data => {
          setMessage(data.message);
          setUser(true);
        })
      } catch(err) {
        setMessage(err);
      }
      setEmail('');
      setPassword('');
      setConf('');
    }
  
    return (
      <>
      <h3>{message}</h3>
  
      <form onSubmit={register}>
        <label><strong>Email</strong></label>
        <br/><input
        id='regEmail'
        type='text'
        value={email}
        onChange={(e) => (setEmail(e.target.value))}
        ref={emailRef}
        />
        <br/>
  
        <label><strong>Password</strong></label>
        <br/><input
        id='regPswrd'
        type='password'
        value={password}
        onChange={(e) => {setPassword(e.target.value)}}
        ref={pswrdRef}
        />
        <br/>
  
        <label><strong>Repeat the password</strong></label>
        <br/><input
        id='regConf'
        type='password'
        value={conf}
        onChange={(e) => {setConf(e.target.value)}}
        ref={confRef}
        />
        <br/>
  
        <button type='submit' style={{marginTop: "10px"}}>OK</button>
      </form>
      </>
    )    
}