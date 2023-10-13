// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from '../pages/Users';
import Dashboard from '../Dashboard/Dashboard';
import Tickets from '../pages/Tickets';
const AllRoutes = () => {
  return (
    <Routes>
  
      <Route  path="/" element={<Dashboard/>} />
      <Route path="/tickets" element={<Tickets/>} />
      <Route path="/users" element={<Users/>} />
      {/* Add more routes here */}
    </Routes>
  );
};

export default AllRoutes;
