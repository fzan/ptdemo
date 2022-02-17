import React, { Component } from 'react';
import FullCalendar, { formatDate } from "@fullcalendar/react";

const styles = {
  wrap: {
    display: "flex"
  },
  left: {
    marginRight: "10px"
  },
  main: {
    flexGrow: "1"
  }
};

let Calendario = (props) => {

  // const [modal, setModal, events, setEvents, selection, setSelection, addHoliday, removeHoliday] = useContext(CalendarContext);
  //if (events && events.length > 0) debugger;

  return <React.Fragment>
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "timeGridDay" //,timeGridWeek,dayGridMonth
      }}
      initialView="dayGridMonth"
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      weekends={true}
      locale={itLocale}
      contentHeight="auto"
      events={events} // alternatively, use the `events` setting to fetch from a feed
      select={null} //this.handleDateSelect))
      // eventContent={(eventInfo) => renderEventContent(eventInfo, removeHoliday)} // custom render function
      // dateClick={(event) => {
        // setSelection(event)
        // setModal(true)
      // }} //this.handleEventClick
      eventsSet={null} // called after events are initialized/added/changed/removed this.handleEvents
    /*dayCellContent={(date, cell) => {
       //BADGES
        return (
            <React.Fragment><i class="fa fa-plane" aria-hidden="true">{date.dayNumberText}</i></React.Fragment>
    )}}*/
    /* you can update a remote database when these fire:
    eventAdd={function(){}}
    eventChange={function(){}}
    eventRemove={function(){}}
    */
    />
    <FormDialog />
  </React.Fragment>
}

export default Calendar;