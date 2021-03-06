import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useCallback, useMemo, Fragment } from "react";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import PropTypes from 'prop-types';
import axios from "axios";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [

];

const url = 'http://34.228.145.193::8080/account/tasks'

const pointCount = 0;
const email = "test@test.com"






function MonthlyView() {
const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
const [allEvents, setAllEvents] = useState(events)

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent])
    axios.post(url, events, email )
  }

  function handleAddPoint(){
    console.log("Added a point");
    pointCount = pointCount + 1;
    
  }
  return (
    <div className="MonthlyView">
       <h1 className="CalendarTitle">Calendar</h1>

      

      
         
            <h2>Add New Event</h2>
            <div>
              <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
              <input type="text" placeholder="start" style={{ width: "20%", marginRight: "10px" }} value={newEvent.start} onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })} />
              <input type="text" placeholder="end" style={{ width: "20%", marginRight: "10px" }} value={newEvent.end} onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })} />
              
              <button style={{marginTop: "10px"}} onClick = {handleAddEvent}>
                Add Event
              </button>
    

      </div>

     <Calendar className="calendar" 
        localizer = {localizer} 
        events = {allEvents} 
        startAccessor = "start" 
        endAccessor = "end" 
        style = {{ height: 500, margin: "50px" }}/>

    <div className='CompleteTask'>
      <h3>Did you complete a task today?</h3>
      <button style={{marginTop: "10px"}} onClick = {handleAddPoint}>
        Yes
      </button>
    </div>

    </div>
);
}

export default MonthlyView;