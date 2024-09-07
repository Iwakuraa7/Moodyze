import { createContext, useRef, useState, useEffect } from 'react'
import './App.css'
import Register from '../components/Register';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import GuestLayout from '../components/GuestLayout';
import TodaysMood from '../components/TodaysMood';
import UserCalendar from '../components/UserCalendar';

export const AppContext = createContext();

function App() {
  const [isUser, setUser] = useState(false);
  const [calendar, setCalendar] = useState(null);
  const registerRef = useRef(null);
  const loginRef = useRef(null);
  const todaysMoodRef = useRef(null);
  const calendarRef = useRef(null);

  function showLoginForm() {
    registerRef.current.style.display = 'none';
    loginRef.current.style.display = 'block';
  }
  function showRegisterForm() {
    registerRef.current.style.display = 'block';
    loginRef.current.style.display = 'none';
  }

  // To control calendar and todayMood's appeareance
  useEffect(() => {
    if(calendar) {
        console.log(calendar.calendar_info);
        todaysMoodRef.current.style.display = 'none';
        calendarRef.current.style.display = 'block';
    }
  }, [calendar]);  

  const contextValues = {
    isUser,
    setUser,
    calendar,
    setCalendar,
    registerRef,
    loginRef,
    todaysMoodRef,
    calendarRef
  }

  // TODO:
  // 31 August
  // Fix the bug with UserCalendar component, why is it not rendering conditionally?
  // The bug was within map function and the fact that UserCalendar component was in todayMoodRef's div :P

  // TODO:
  // 09 September
  // 1) Decorate the front part:
  //      textarea
  //      login form
  //      register form
  // 2) Find a way to display calendar info
  return(
    <AppContext.Provider value={contextValues}>
      <Navbar showLoginForm={showLoginForm}/>
      {isUser
      ?
      <>
      <div ref={todaysMoodRef}>
        <TodaysMood/>
      </div>
      <div id="calendarContainer" ref={calendarRef}>
        {calendar ? <UserCalendar/> : console.log('-calendar')}
      </div>
      </>
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
