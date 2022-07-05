import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Booking() {
  const [bookings, setRooms] = useState([]);
  useEffect(() => {
    getAllSalle();
  }, []);

  const getAllSalle = async () => {
    const res = await axios.get("http://localhost:5000/bookings");
    setRooms(res.data);
  };

  // console.log(rooms);
  return (
    <div className="card">
      {bookings.map((booking) => {
        return (
          <div>
            <p>{booking.name}</p>
            {/* <p>{room.image}</p><br/> */}
            <p>{booking.description}</p>
            <p>{booking.ageLimit}</p>
            <p>{booking.capacityMin}</p>
            <p>{booking.capacityMax}</p>
            <p>{booking.slots}</p>
          </div>
        );
      })}
    </div>
  );
}
