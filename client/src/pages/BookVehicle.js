import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input, Button, Card } from 'antd';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const BookVehicle = () => {
  const { id } = useParams();
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');
  const [vehicle, setVehicle] = useState({});

  const getVehicle = async () => {
    try {
      const { data } = await axios.get(`/api/vehicles/get-vehicle/${id}`);
      if (data && data.vehicle) {
        setVehicle(data.vehicle);
        toast.success(data.message);
      } else {
        toast.error('Vehicle data not found');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something Went Wrong');
    }
  }; 
  
  useEffect(() => {
    getVehicle();
  }, [id]);

  function onToken(token) {
    // Calculate the booking amount based on distance and price per kilometer
    const bookingAmount = parseFloat(distance) * parseFloat(vehicle.priceperkm);

    axios
      .post('/api/payment/create-payment', { amount: bookingAmount })
      .then((response) => {
        const sessionId = response.data.sessionId;
        // Redirect to Stripe payment page
        window.location.href = `https://checkout.stripe.com/pay/${sessionId}`;
      })
      .catch((error) => {
        console.error(error);
      });
  }


  return (
    <Layout>
      <div className="container mx-auto p-32">
        <div className="flex">
          <div className="w-1/4">
          </div>
          <div className="w-3/4">
            <h1 className="text-3xl  font-bold mb-4">Book Vehicle</h1>
            <div className="flex" key={vehicle._id}>
              <Card className="m-2 p-4 w-96 bg-white shadow rounded">
                {/* <img
                  src={`vehicles/get-photo/${vehicle._id}`}
                  className="card-img-top"
                  alt={vehicle.name}
                /> */}
                <div className="card-body">
                  {/* <h5 className="card-title text-lg font-bold">{vehicle.name}</h5>
                  <h5 className="card-title text-lg font-bold">{vehicle.priceperkm}</h5>
                  <h5 className="card-title text-lg font-bold">{vehicle.capacity}</h5>
                  <p className="text-lg font-semibold mb-2">Book Vehicle</p> */}
                  <Input
                    type="text"
                    value={source}
                    placeholder="Source"
                    className="form-input mb-2"
                    onChange={(e) => setSource(e.target.value)}
                  />
                  <Input
                    type="text"
                    value={destination}
                    placeholder="Destination"
                    className="form-input mb-2"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                  <Input
                    type="text"
                    value={distance}
                    placeholder="Distance in KM"
                    className="form-input mb-2"
                    onChange={(e) => setDistance(e.target.value)}
                  />
                  <Input
                    type="date"
                    value={date}
                    placeholder="Date"
                    className="form-input mb-2"
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <StripeCheckout
                    token={onToken}
                    name="Book Vehicle"
                    description={`Book ${vehicle.name}`}
                    currency="inr"
                    stripeKey="pk_test_51NjjppSGA9hq5I7s7zsv8x9vldMAXRDF29jaj5hmSPTi1r4WU9CKAXcTZ4BpWNJH5dP4puYOY4MBaSH5XJnpWfTt00foBWGLth"
                  >
                    <Button className="card__price text--medium btn1">Book Vehicle</Button>
                  </StripeCheckout>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookVehicle;
