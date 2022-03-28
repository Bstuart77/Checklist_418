
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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


function MonthlyView() {
  return (
    <div className="MonthlyView">
     <Calendar localizer={localizer} events={events} 
     startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
    </div>
  );
}

export default MonthlyView;
