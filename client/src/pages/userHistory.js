// components/BookingHistory.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingHistory = () => {
  const [bookingHistory, setBookingHistory] = useState([]);

  useEffect(() => {
    // Fetch user's booking history from the server
    const fetchBookingHistory = async () => {
      try {
        const { data } = await axios.get('/api/user-history'); // Replace with your API endpoint
        setBookingHistory(data.bookingHistory);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookingHistory();
  }, []);

  return (
    <div>
      <h1>Booking History</h1>
      <ul>
        {bookingHistory.map((booking) => (
          <li key={booking._id}>
            {/* Display booking details */}
            Vehicle: {booking.vehicle.name}
            Source: {booking.source}
            Destination: {booking.destination}
            Date: {new Date(booking.date).toLocaleDateString()}
            Distance: {booking.distance} KM
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingHistory;
