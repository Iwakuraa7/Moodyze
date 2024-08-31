import { createContext, useRef, useState } from 'react'
import './App.css'
import Register from '../components/Register';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import GuestLayout from '../components/GuestLayout';
import TodaysMood from '../components/TodaysMood';

export const AppContext = createContext();
// export const UserContext = createContext();
// export const CalendarContext = createContext();

function App() {
  const [isUser, setUser] = useState(false);
  const [calendar, setCalendar] = useState(null);
  const registerRef = useRef(null);
  const loginRef = useRef(null);
  const todaysMoodRef = useRef(null);

  function showLoginForm() {
    registerRef.current.style.display = 'none';
    loginRef.current.style.display = 'block';
  }
  function showRegisterForm() {
    registerRef.current.style.display = 'block';
    loginRef.current.style.display = 'none';
  }

  const contextValues = {
    isUser,
    setUser,
    calendar,
    setCalendar,
    registerRef,
    loginRef,
    todaysMoodRef
  }

  return(
    <AppContext.Provider value={contextValues}>
      <Navbar showLoginForm={showLoginForm}/>
      {isUser
      ?
      <div ref={todaysMoodRef}>
        <TodaysMood/>
      </div>
      :
      <>
      <GuestLayout showRegisterForm={showRegisterForm} showLoginForm={showLoginForm}/>
      <div id="registerContainer" ref={registerRef}>
        <Register/>
      </div>
      <div id="loginContainer" ref={loginRef}>
        <Login/>
      </div>
      </>}
    </AppContext.Provider>
  )
} 

export default App
