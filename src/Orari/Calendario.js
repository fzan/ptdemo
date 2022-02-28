import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import Grid from '@material-ui/core/Grid'
import { withDataProvider } from 'react-admin'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // needs additional webpack config!
import bootstrap5Plugin from '@fullcalendar/bootstrap5';


const DataStandard = "2020-01-01"

const events = [
  { title: "ENTRATA", id: "1", color: "green" },
  { title: "USCITA", id: "2", color: "red" }
]

class DemoApp extends React.Component {

  calendarRef = React.createRef();

  state = {
    weekendsVisible: true,
    currentEvents: [],
    defaultSlotDuration: ['01:00:00', '00:30:00', '00:15:00', '00:10:00', '00:05:00'],
    slotDuration: 0
  }

  componentDidMount() {
    this.props.dataProvider.getList('orarios', { pagination: { page: 1, perPage: 10000 }, sort: { field: "id", order: "asc" } }).then(data => {
      console.log(data)
    })
    // debugger
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
    let _that = this
    return (
      <>
        <p align="center">
          <strong>Inserimento Fasce di Timbrature</strong>
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
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrap5Plugin]}
                headerToolbar={{
                  left: "DiminuzioneFasciaOraria,AumentoFasciaOraria",
                  // center: "title",
                  right: '' //,timeGridWeek,timeGridDay
                }}
                customButtons={{
                  AumentoFasciaOraria: {
                    // text: 'A',
                    icon: 'bi-arrows-expand',
                    click: function () {
                      // debugger
                      if (_that.state.slotDuration < 4) {
                        _that.setState({ slotDuration: _that.state.slotDuration + 1 })
                      }
                    },
                  },
                  DiminuzioneFasciaOraria: {
                    icon: 'bi-arrows-collapse',
                    click: function () {
                      // debugger
                      if (_that.state.slotDuration > 0) {
                        _that.setState({ slotDuration: _that.state.slotDuration - 1 })
                      }
                    },
                  },
                }}
                contentHeight={500}
                themeSystem='bootstrap5'
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
                slotDuration={this.state.defaultSlotDuration[this.state.slotDuration]}
              // refetchResources={true}
              // slotLabelInterval={15}

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
      <b> from {formatDate(event.start, { hour: 'numeric', minute: 'numeric' })}</b>
      <b> to {formatDate(event.end, { hour: 'numeric', minute: 'numeric' })}</b>
    </li>
  )
}

export default withDataProvider(DemoApp)