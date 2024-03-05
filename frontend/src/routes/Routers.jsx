import React from 'react';
import Home from '../pages/Home';
import Services from '../pages/Services'
import Career from '../pages/Caretakers/takerForm';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Caretakers from '../pages/Caretakers/Caretakers';
import CaretakersDetails from '../pages/Caretakers/CaretakersDetails';
import MyAccount from '../Dashboard/user-account/MyAccount';
import Dashboard from '../Dashboard/caretaker-account/Dashboard';
import AdminNeeder from '../pages/admin/adminneederdetails';
import CheckoutSuccess from "../pages/payment/successPage";

import { Routes, Route } from 'react-router-dom'
import FindCaretaker from '../pages/FindCaretaker';
import ProtectedRoute from './ProtectedRoute';

import Users from '../pages/admin/adminuser';
import Taker from '../pages/admin/adminCaretaker'
import AdminTaker from "../pages/admin/admintakerdetails"
import Invoice from "../pages/invoice/invoiceApp"

const Routers = () => {
    return <Routes>
        < Route path="/" element={<Home />} />
        < Route path="/home" element={<Home />} />
        {/* < Route path="/caretakers" element={<Caretakers/>} />
        < Route path="/caretakers/:id" element={<CaretakersDetails/>} /> */}
        < Route path="/login" element={<Login />} />
        < Route path="/register" element={<Signup />} />
        < Route path="/contact" element={<Contact />} />
        < Route path="/Services" element={<Services />} />
        < Route path="/career" element={<Career />} />
        < Route path="/findcaretaker" element={<FindCaretaker />} />
        
        < Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={["careneeder"]}><MyAccount />  </ProtectedRoute>} />
        < Route path="/caretakers/profile/me"  element={ <ProtectedRoute allowedRoles={['caretaker']}><Dashboard/> </ProtectedRoute> } />
        
        < Route path="/Users" element={<Users/>} />
        < Route path="/Taker" element={<Taker/>} />
        <Route path={`/AdminNeeder/:id`} element={<AdminNeeder/>} />
        <Route path={`/Admintaker/:id`} element={<AdminTaker/>} />
        < Route path="/CheckoutSuccess" element={<CheckoutSuccess/>} />
        < Route path="/invoice" element={<Invoice/>} />
    </Routes>
};

export default Routers;