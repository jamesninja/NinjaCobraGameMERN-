import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoomDetails from "./component/Home";
import Navigation from "./component/NavBar";
import SignIn from "./component/SignIn";
import Room from "./component/Room";
import Booking from "./component/booking";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<RoomDetails />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/salles/:id" element={<Room />} />
        <Route path="/salles/" element={<Room />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
