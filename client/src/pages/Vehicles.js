import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { toast } from "react-toastify";
import axios from "axios";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  const getAllVehicles = async () => {
    try {
      const { data } = await axios.get("/vehicles/get-vehicles");
      setVehicles(data.vehicles);
      toast.success(data.message);
    } catch (error) {
      console.error(error);
      toast.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    getAllVehicles();
  }, []);

  return (
    <Layout>
      <br/>
      <br/>
      <main>
        <section className="cards">
          {vehicles.map((vehicle) => (
            <div className="card bs1" key={vehicle._id}>
              <div className="card__image-container">
                <img
                  src={`/vehicles/get-photo/${vehicle._id}`}
                  alt={vehicle.name}
                />
              </div>
              <div className="card__content">
                <p className="card__title text--medium"> {vehicle.name}</p>
                <div className="card__info">
                  <p className="text--medium">$/km: {vehicle.priceperkm}</p>
                  <p className="text--medium" style={{ marginLeft: "10px" }}>
                    Capacity: {vehicle.capacity}
                  </p>
                  <Button className="card__price text--medium btn1">
                    <Link to={`/bookvehicle/${vehicle._id}`}>Book Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <br/>
      <br/>
    </Layout>
  );
};

export default Vehicles;
