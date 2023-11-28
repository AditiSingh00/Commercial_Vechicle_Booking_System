import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import Vehicles from './pages/Vehicles';
import Register from './pages/Register';
import Login from './pages/Login';
import AddForm from './pages/AddForm';
import BookVehicle from './pages/BookVehicle';
import UserHistory from './pages/userHistory';
import Newsletter from './pages/Newsletter';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}  />
      <Route path="/vehicles" element={<Vehicles/>}  />
      <Route path="/contact" element={<Contact/>}  />
      <Route path="/register" element={<Register/>}  />
      <Route path="/login" element={<Login/>}  />
      <Route path="/form" element={<AddForm/>}  />
      <Route path="/bookvehicle/:id" element={<BookVehicle />} />
      <Route path="/booking-history" element={<UserHistory/>}  />
      <Route path="/newsletter" element={<Newsletter/>}  />
    </Routes>
    </>
  );
}

export default App;
