import React from 'react'
import { BrowserRouter as Router, Route, Routes}
    from "react-router-dom";
    import Login from "./Login"
    import Register from './Register';
import Navbar from './Navbar';
import './App.css'
import AddEvent from './AddEvent';
import EventList from './EventList';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
        <Route exact path="Login" element={<Login/>} />
        <Route exact path="Register" element={<Register/>} />
        <Route exact path="AddEvent" element={<AddEvent/>} />
        <Route exact path="EventList" element={<EventList/>} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
