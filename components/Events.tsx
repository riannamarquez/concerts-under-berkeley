const events = [
  {
    month: 'FEB',
    day: '21',
    title: 'Spring Kickoff Concert',
    location: '📍 Sproul Plaza',
    time: '🕐 6:00 PM - 9:00 PM',
    description: 'Kick off the spring semester with live performances from 5 student bands. Free entry, food trucks on site!',
    featured: true,
  },
  {
    month: 'MAR',
    day: '07',
    title: 'Open Mic Night',
    location: "📍 Bear's Lair Pub",
    time: '🕐 7:00 PM - 10:00 PM',
    description: 'Sign up to perform or come enjoy an evening of raw, unplugged talent from your fellow Bears.',
    featured: false,
  },
  {
    month: 'MAR',
    day: '22',
    title: 'Battle of the Bands',
    location: '📍 Zellerbach Hall',
    time: '🕐 5:00 PM - 9:30 PM',
    description: "Berkeley's best student bands compete head-to-head. Audience votes decide the winner. Bragging rights on the line!",
    featured: false,
  },
  {
    month: 'APR',
    day: '12',
    title: 'Sunset Sessions',
    location: '📍 Faculty Glade',
    time: '🕐 4:00 PM - 7:00 PM',
    description: 'Acoustic sets under the trees as the sun goes down. Bring a blanket and enjoy the vibes.',
    featured: false,
  },
];

export default function Events() {
  return (
    <section className="events" id="events">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What&apos;s Coming</span>
          <h2 className="section-title">Upcoming Events</h2>
        </div>
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.title} className={`event-card${event.featured ? ' featured' : ''}`}>
              <div className="event-date">
                <span className="event-month">{event.month}</span>
                <span className="event-day">{event.day}</span>
              </div>
              <div className="event-info">
                {event.featured && <span className="event-badge">Featured</span>}
                <h3>{event.title}</h3>
                <p className="event-details">
                  <span>{event.location}</span>
                  <span>{event.time}</span>
                </p>
                <p className="event-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
