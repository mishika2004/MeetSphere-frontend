import useFetch from "../useFetch";
import {useState} from "react"
import { Link } from "react-router-dom";
import.meta.env.VITE_API_URL


const Home = ({searchTerm}) => {
    const API_URL = import.meta.env.VITE_API_URL;
    const [filter, setFilter] = useState("All");
  const {
    data,
    loading,
    error,
  } = useFetch(`${API_URL}/api/events`);

   const events = Array.isArray(data) ? data : [];

  if (loading) return <p className="text-center mt-5">Loading events...</p>;
  if (error) return <p className="text-danger text-center">{error}</p>;



  // const filteredEvents =
  // filter === "All"
  //   ? events
  //   : events.filter((event) => event.eventType === filter);

  const filteredEvents = events.filter((event) => {
    const matchesFilter =
      filter === "All" || event.eventType === filter;

    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });


  return (
    <div className="background">
      <div className="container py-4">
        <div className="d-flex align-items-center mb-4">
        <h2 className="fw-bold m-0">Discover the events you like</h2>

        <select className="form-select w-auto ms-auto" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
        </select>
        </div>

        <div className="row">
          {filteredEvents && filteredEvents.map((event) => (
            <div className="col">
            <Link to={`/events/${event._id}`}  className="text-decoration-none text-dark">

            <div className="event-card h-100">

                <div className="event-image-wrapper">
                <img src={event.imageUrl} alt={event.title} />
                <span className="event-badge">{event.eventType} Event</span>
                </div>

                <div className="event-content">
                <p className="event-date">
                    {event.date} · {event.startTime}
                </p>

                <h5 className="event-title">{event.title}</h5>

                <p className="event-location">{event.venue}</p>

                
                </div>

            </div>
            </Link>
            </div>

          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;
