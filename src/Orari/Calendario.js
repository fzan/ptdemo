import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import Grid from '@material-ui/core/Grid'
import { withDataProvider } from 'react-admin'

const DataStandard = "2020-01-01"

const events = [
  { title: "ENTRATA", id: "1", color: "green" },
  { title: "USCITA", id: "2", color: "red" }
]

class DemoApp extends React.Component {

  calendarRef = React.createRef();

  state = {
    weekendsVisible: true,
    currentEvents: []
  }

  componentDidMount() {
    debugger
    this.props.dataProvider.getList('orarios', { pagination: { page: 1, perPage: 10000 }, sort: { field: "id", order: "asc" } }).then(data => {
      console.log(data)
    })

    let draggableEl = document.getElementById("external-events");
    this.calendarRef.current.getApi().gotoDate(DataStandard);
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let title = eventEl.getAttribute("title");
        let color = eventEl.getAttribute("color");
        let id = eventEl.getAttribute("data");
        return {
          title: title,
          id: id,
          overlap: false,
          backgroundColor: color
        };
      }
    });
  }

  render() {
    return (
      <>
        <p align="center">
          <strong>Inserimento Fasce di Giornata</strong>
        </p>
        <Grid container spacing={1} style={{ width: "100%" }}>
          <Grid item xs={2}>
            <div className='demo-app'>
              {this.renderSidebar()}
              <div
                id="external-events"
                style={{
                  padding: "10px",
                  width: "80%",
                  height: "auto",
                  maxHeight: "-webkit-fill-available"
                }}
              >
                <div style={{ backgroundColor: 'white' }}>
                  <p align="center">
                    <strong>Eventi</strong>
                  </p>
                  {events.map(event => (
                    <>
                      <div
                        className="fc-event"
                        title={event.title}
                        data={event.id}
                        key={event.id}
                        duration={"01:00"}
                        style={{ backgroundColor: event.color, borderRadius: '10px', textAlign: 'center', cursor: 'grab', margin: '5px' }}
                        color={event.color}
                        overlap={false}
                      >
                        {event.title}
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={10}>
            <div className='demo-app-main'>
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                  left: "myCustomButton",
                  // center: "title",
                  right: '' //,timeGridWeek,timeGridDay
                }}
                customButtons={{
                  myCustomButton: {
                    text: 'Cambio Fasce Orarie',
                    click: function () {
                      alert('modifica componente!');
                    },
                  },
                }}
                initialView='timeGridDay'
                editable={true}
                selectable={true}
                selectMirror={false}
                dayMaxEvents={true}
                // weekends={this.state.weekendsVisible}
                initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                select={this.handleDateSelect}
                // eventContent={renderEventContent} // custom render function (al click)
                eventClick={this.handleEventClick}
                eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                droppable={true}
                ref={this.calendarRef}
                allDaySlot={false}
                dayHeaders={false}
                defaultTimedEventDuration={'01:00:00'}
                forceEventDuration={true}
                select={null}
              // eventAdd={this.handleDateSelect}
              /* you can update a remote database when these fire:
              eventAdd={function () { }}
              eventChange={function () { }}
              eventRemove={function () { }}
              */
              />
            </div>
          </Grid>
          <div className='demo-app-sidebar-section'>
            <h2>Eventi Inseriti ({this.state.currentEvents.length})</h2>
            <ul>
              {this.state.currentEvents.map(renderSidebarEvent)}
            </ul>
          </div>
        </Grid>
      </>
    )
  }

  renderSidebar() {
    return (
      <div className='demo-app-sidebar'>
        <div className='demo-app-sidebar-section'>
          <h2>Istruzioni</h2>
          <ul>
            <li>Puoi spostare e ricalibrare la fascia oraria</li>
            <li>Click su un evento per poterlo eliminare</li>
          </ul>
        </div>
      </div>
    )
  }

  handleWeekendsToggle = () => {

    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {

      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: false,
      })
    }
  }

  handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <i>{event.title}</i>
      <b> Dalle {formatDate(event.start, { hour: 'numeric', minute: 'numeric' })}</b>

      <b> alle {formatDate(event.end, { hour: 'numeric', minute: 'numeric' })}</b>
      {/* <b> Alle {formatDate(event.start.getTime() + (60 * 60 * 1000), { hour: 'numeric', minute: 'numeric' })}</b>} */}
    </li>
  )
}

export default withDataProvider(DemoApp)