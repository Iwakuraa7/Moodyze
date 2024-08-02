import { useState, useRef, useContext } from "react";
import { UserContext } from "../src/App";

export default function Register() {
    const [isUser, setUser] = useContext(UserContext)
    const [message, setMessage] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conf, setConf] = useState('');
  
    const emailRef = useRef(null);
    const pswrdRef = useRef(null);
    const confRef = useRef(null);
  
    // useEffect(() => {
    //   async function fetchData() {
    //     try {
    //       const response = await fetch('http://localhost:8000/mail/api');
    //       const data = await response.json();
    //       setMessage(data.message);
    //     } catch(err) {
    //       console.log(err);
    //     }
    //   }
  
    //   fetchData();
    // }, [])
  
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
      // emailRef.current.value = '';
      // pswrdRef.current.value = '';
      // confRef.current.value = '';
    }
  
    return (
      <>
      {/* <h2>API message:</h2> */}
      <h3>{message}</h3>
  
      {/* <h1>Moodyze</h1>
      <h3>Register</h3> */}
      <form onSubmit={register}>
        <label>Email</label>
        <input
        id='regEmail'
        type='text'
        value={email}
        onChange={(e) => (setEmail(e.target.value))}
        ref={emailRef}
        />
        <br/>
  
        <label>Password</label>
        <input
        id='regPswrd'
        type='password'
        value={password}
        onChange={(e) => {setPassword(e.target.value)}}
        ref={pswrdRef}
        />
        <br/>
  
        <label>Repeat the password</label>
        <input
        id='regConf'
        type='password'
        value={conf}
        onChange={(e) => {setConf(e.target.value)}}
        ref={confRef}
        />
        <br/>
  
        <button type='submit'>Ok</button>
      </form>
      </>
    )    
}