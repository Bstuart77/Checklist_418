import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useCallback, useMemo, Fragment } from "react";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import PropTypes from 'prop-types'

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

function DisplayNewEventModal(){
  if(document.getElementById("NewEventModalUpdate").style.display === "block"){
      document.getElementById("NewEventModalUpdate").style.display = "none";
  } else {
      document.getElementById("NewEventModalUpdate").style.display = "block";
  }

}

function DisplayDeleteEventModal(){

}

window.onclick = function (event) {
if (event.target == document.getElementById("NewEventModalUpdate")) {
    document.getElementById("NewEventModalUpdate").style.display = "none";
}
}


function MonthlyView() {
const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
const [allEvents, setAllEvents] = useState(events)

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent])
  }

  function handleAddPoint(){
    console.log("Added a point");
    pointCount = pointCount + 1;
    
  }
  return (
    <div className="MonthlyView">
       <h1 className="CalendarTitle">Calendar</h1>

      <button className="CreateEventButton" onClick={DisplayNewEventModal}> Create New Event </button>

      <div className = 'NewEventModal' id = "NewEventModalUpdate">
          <div className = 'NewEventModalBody'>
            <h2>Add New Event</h2>
            <div>
              <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
              <input type="text" placeholder="start" style={{ width: "20%", marginRight: "10px" }} value={newEvent.start} onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })} />
              <input type="text" placeholder="end" style={{ width: "20%", marginRight: "10px" }} value={newEvent.end} onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })} />
              
              <button style={{marginTop: "10px"}} onClick = {handleAddEvent}>
                Add Event
              </button>
            </div>
          </div>
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