
let eventGuid = 0
// let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  //Eliminazione degli eventi dummy per ingressi-uscite
  // {
  //   id: createEventId(),
  //   title: 'Dummy event',
  //   start: todayStr + 'T16:00:00'
  // },
  // {
  //   id: createEventId(),
  //   title: 'Dummy event 2',
  //   start: todayStr + 'T12:00:00'
  // }
]

export function createEventId() {
  return String(eventGuid++)
}
