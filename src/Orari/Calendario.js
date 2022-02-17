import React, { useContext, useState } from 'react'
import { useAuthenticated } from 'react-admin';
import { useTranslate } from 'react-admin';

// import { Calendar } from '@fullcalendar/core';
import FullCalendar, { formatDate } from "@fullcalendar/react";
import Calendar from "@daypilot/daypilot-lite-react"
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
//import rrulePlugin from '@fullcalendar/rrule'
import itLocale from '@fullcalendar/core/locales/it';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/Delete';

// import { CalendarContext } from "./Calendars"

let Calenda = (props) => {
  // useAuthenticated()

  // const [modal, setModal, events, setEvents, selection, setSelection, addHoliday, removeHoliday] = useContext(CalendarContext);
  //if (events && events.length > 0) debugger;

  return <>
    <FullCalendar //Calendar
      plugins={[dayGridPlugin, timeGridPlugin]} //, interactionPlugin
      // headerToolbar={{
      //     // left: "prev,next today",
      //     // center: "title",
      //     right: "timeGridDay" //,timeGridWeek,timeGridDay
      // }}
      initialView="timeGridDay"
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      weekends={true}
      allDayContent={false}
      stickyHeaderDates={false}
      allowEventOverlap={false}
      locale={itLocale}
      contentHeight="auto"
      slotDuration={'00:30:00'}
      headerToolbar={false}
      dayHeaders={false}
      events={[
        {
          title: 'Andonio',
          start: '2022-02-17T03:30:00',
          end: '2022-02-17T05:30:00'
        },
      ]}
      // events={events} // alternatively, use the `events` setting to fetch from a feed
      // select={null} //this.handleDateSelect))
      // eventContent={(eventInfo) => renderEventContent(eventInfo, removeHoliday)} // custom render function
      // dateClick={(event) => {
      //     setSelection(event)
      //     setModal(true)
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
      dateClick={(info) => {
        alert('clicked ' + info.dateStr);
      }}
      select={(info) => {
        alert('selected ' + info.startStr + ' to ' + info.endStr);
      }}
    />
    {/* <FormDialog /> */}
  </>
}

// const renderEventContent = (eventInfo, removeHoliday) => {
//     return (
//         <div style={{ padding: "1px" }}>
//             <i>{eventInfo.event.title}</i> <span style={{ float: "right" }}>
//                 <DeleteIcon onClick={() => {
//                     const id = eventInfo.event.id
//                     removeHoliday(id)
//                 }
//             }/></span>
//         </div>
//     );
// }


// const FormDialog = (props) => {

//     const translate = useTranslate()
//     const [modal,
//         setModal,
//         events,
//         setEvents,
//         selection,
//         setSelection,
//         addHoliday,
//         removeHoliday] = useContext(CalendarContext);
//     const [name, setName] = useState("")
//     const [type,setType] = useState("Yearly")

//     const handleClickOpen = () => {
//         setModal(true);
//     };

//     const handleClose = () => {
//         setName("")
//         setModal(false)
//     };

//     const handleSubmit = (selection, data) => {

//         addHoliday(selection.dateStr,data)
//         setName("")
//         setModal(false)

//     };

//     return (
//         <div>
//             <Dialog
//                 maxWidth={'lg'}
//                 open={modal}
//                 onClose={handleClose}
//                 aria-labelledby="form-dialog-title"
//             >
//                 <DialogTitle id="form-dialog-title">{translate("resources.Calendars.holidayDialogTitle")}</DialogTitle>
//                 <DialogContent>
//                     {/*<DialogContentText>
//                         Impostazioni Festività
//                     </DialogContentText>*/}
//                     <TextField

//                         autoFocus
//                         margin="dense"
//                         id="name"
//                         label="Nome festa"
//                         onChange={(event) => setName(event.target.value)}
//                         value={name}
//                     />
//                     <br />
//                     <br />
//                     &nbsp;
//                     <InputLabel id="holiday-type">Tipo festività</InputLabel>
//                     <Select
//                         labelId="holiday-type"
//                         id="holiday-type-select"
//                         value={type}
//                         onChange={(event) => setType(event.target.value)}
//                     >
//                         <MenuItem value={"Yearly"}>Ripetuta annualmente</MenuItem>
//                         <MenuItem value={"Daily"}>Singola</MenuItem>

//                     </Select>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleClose} color="primary">
//                         Cancella
//                     </Button>
//                     <Button onClick={() => handleSubmit(selection, { name, type })} color="primary">
//                         conferma
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     );
// }

export default Calenda