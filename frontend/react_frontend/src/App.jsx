import { createContext, useRef, useState } from 'react'
import './App.css'
import Register from '../components/Register';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import GuestLayout from '../components/GuestLayout';
import TodaysMood from '../components/TodaysMood';

export const UserContext = createContext();

function App() {
  const [isUser, setUser] = useState(false);
  const registerRef = useRef(null);
  const loginRef = useRef(null);

  function showLoginForm() {
    registerRef.current.style.display = 'none';
    loginRef.current.style.display = 'block';
  }
  function showRegisterForm() {
    registerRef.current.style.display = 'block';
    loginRef.current.style.display = 'none';
  }

  return(
    !isUser ? (
      <UserContext.Provider value={[isUser, setUser]}>
        <Navbar showLoginForm={showLoginForm}/>
        <GuestLayout showRegisterForm={showRegisterForm} showLoginForm={showLoginForm}/>
        <div id="registerContainer" ref={registerRef}>
          <Register/>
        </div>
        <div id="loginContainer" ref={loginRef}>
          <Login/>
        </div>
      </UserContext.Provider>
    ) : (
      <UserContext.Provider value={[isUser, setUser]}>
        <Navbar/>
        <TodaysMood/>
      </UserContext.Provider>
    )
  )
} 

export default App
