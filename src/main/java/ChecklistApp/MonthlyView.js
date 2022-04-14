import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";


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
  {
      title: "409 exam",
      start: new Date(2022, 2, 28),
      end: new Date(2022, 2, 29),
  },
  {
      title: "Capstone Milestone due",
      start: new Date(2022, 2, 30),
      end: new Date(2022, 2, 31),
  },
  {
    title: "Sprint 3 due",
    start: new Date(2022, 2, 29),
    end: new Date(2022, 2, 30),
},
];

function DisplayNewEventModal(){

}

function DisplayDeleteEventModal(){
  
}


function MonthlyView() {
  const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
    const [allEvents, setAllEvents] = useState(events)

    function handleAddEvent() {
      setAllEvents([...allEvents, newEvent])
    }
    return (
      <div className="MonthlyView">
        <h1>Calendar</h1>

        <button className="MonthlyViewButton" onClick={DisplayNewEventModal}> Create New Event </button>

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

        {/*
          A work in progress for the DeleteEventModal
        */}
        <div className = 'DeleteEventModal'>
          <h2>Delete Event</h2>
          <div>
            <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
            <input type="text" placeholder="start" style={{ width: "20%", marginRight: "10px" }} value={newEvent.start} onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })} />
            <input type="text" placeholder="end" style={{ width: "20%", marginRight: "10px" }} value={newEvent.end} onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })} />
            
            <button style={{marginTop: "10px"}} onClick = {handleAddEvent}>
              Add Event
            </button>
          </div>

        </div>

       <Calendar className="calendar" 
          localizer = {localizer} 
          events = {allEvents} 
          startAccessor = "start" 
          endAccessor = "end" 
          style = {{ height: 500, margin: "50px" }}/>
      </div>
  );
}

export default MonthlyView;