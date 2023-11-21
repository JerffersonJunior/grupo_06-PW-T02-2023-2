import { BrowserRouter, Routes, Route } from "react-router-dom";

import Categories from "./pages/Categories"
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Profile from './pages/Profile'
import PrivateRoute from "./components/PrivateRouter";
import Footer from "./components/Rodape"
import { useState } from "react";


function RoutesApp() {
  const [categoria, setCategoria] = useState("")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/categories" element={<PrivateRoute><Categories categoria={categoria} setCategoria={setCategoria} /></PrivateRoute>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesApp;