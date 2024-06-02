/* eslint-disable react/prop-types */
import "./Event.css"
const events = [
  {
    time: { day: "Monday", time: "4pm-7pm" },
    field: "Cyber security",
    name: "Webster Ifedha.",
    location: "computer lab F04",
  },
  {
    time: { day: "Tuesday", time: "5pm to 8pm" },
    field: "UI/UX",
    name: "Manase Gunga",
    location: "computer lab F04",
  },
  {
    time: { day: "Wednesday", time: "6pm to 9pm" },
    field: "Web development",
    name: "Carolyne Githenduka",
    location: "computer lab F04",
  },
  {
    time: { day: "Thursday ", time: "4pm-7pm" },
    field: "Mobile apps development",
    name: " Stanley Amunze..",
    location: "computer lab F04",
  },
  {
    time: { day: "Friday", time: "3pm to 6pm" },
    field: "Cloud engineering",
    name: "Paul Karanja..",
    location: "computer lab F04",
  },
  {
    time: { day: "Saturday", time: "1pm to 4pm" },
    field: "Power Platform",
    name: " Evyonn Mbithe.",
    location: "computer lab F04",
  },
];
const EventsCard = (props) => {
  return (
    <div className="eventCard">
      <div className="events-time-date">
        <p>{props.time.day}</p>
        <p>{props.time.time}</p>
      </div>
      <div className="eventsName">
        <h2>{props.field}</h2>
        <p>{props.location}</p>
        <p>by {props.name}</p>
      </div>
    </div>
  );
};

function Event() {
  return (
    <>
      <section className="events-section-content">
        <h2 >Events</h2>
        <div className="events-card-section">
          {events.map((event, index) => {
            return (
              <EventsCard
                key={index}
                name={event.name}
                time={event.time}
                field={event.field}
                location={event.location}
              />
            );
          })}
          ;
        </div>
      </section>
    </>
  );
}
export default Event;
