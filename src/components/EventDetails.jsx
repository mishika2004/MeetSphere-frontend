import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { FaMapMarkerAlt, FaVideo } from "react-icons/fa";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";



const EventDetails = () => {
  
  const { id } = useParams();
  const { data: event, loading, error } = useFetch(
    `https://meet-sphere-xi.vercel.app/api/events/${id}`
  );

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-danger">{error}</p>;
if (!event) return <p>No event found</p>;

  return (
   <>
     <Header/>
    <div className="container-fluid py-1 px-0">
      <div className="row">

        {/* LEFT SECTION */}
        <div className="col-md-8">
          <h2 className="fw-bold">{event.title}</h2>
          <p className="text-muted">
            {event.eventType === "Online" ? <FaVideo /> : <FaMapMarkerAlt />}{" "}
            {event.eventType} Event
          </p>

          <img
            src={event.imageUrl || event.image}
            alt={event.title}
            className="img-fluid rounded mb-4"
          />

         
          <h5 className="overview">Overview</h5>
          <p style={{textAlign: "left"}}>{event.description?.overview || event.description?.text || "No overview available."}</p>


          {/* Agenda */}
          <h5 className="mt-3" style={{textAlign: "left"}}>Agenda</h5>

          {event.description?.agenda.length>0 ? (
          <ul className="agenda-list">
            {event.description.agenda.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          ) :(
            <p>No agenda available.</p>
          )}

          
          <div className="mb-3">
            {event.tags?.map((tag, index) => (
              <span key={index} className="badge bg-secondary me-2">
                {tag}
              </span>
            ))}
          </div>

          
          <p><strong>Dress Code:</strong> {event.additionalInfo?.dressCode || "Not specified"}</p>
          

          
          {/* <h5 className="mt-4">Speakers</h5>
          <div className="d-flex gap-3">
            {event.speakers?.map((speaker) => (
              <div key={speaker.name} className="card p-2 text-center" style={{ width: "140px" }}>
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="rounded-circle mb-2"
                  width="60"
                  height="60"
                />
                <strong>{speaker.name}</strong>
                <small className="text-muted">{speaker.role}</small>
              </div>
            ))}
          </div> */}
        </div>

        {/* RIGHT SECTION */}
        <div className="col-md-4">
          <div className="card p-3 shadow-sm sticky-card">
            <p>{event.date}</p>
            <p>{event.startTime} – {event.endTime}</p>
            <p>{event.venue}</p>

            {event.isPaid ? (
              <p className="fw-bold">₹ {event.price}</p>
            ) : (
              <p className="fw-bold text-success">Free</p>
            )}

           
          </div>
        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default EventDetails;
