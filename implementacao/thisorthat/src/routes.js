import { BrowserRouter, Routes, Route } from "react-router-dom";

import Categories from "./pages/Categories"
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Profile from './pages/Profile'
import Jogo from './pages/Jogo'

import PrivateRoute from "./components/PrivateRouter";
import Footer from "./components/Rodape"


function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/categories" element={<PrivateRoute><Categories/></PrivateRoute>} />
        <Route path="/jogo" element={<PrivateRoute><Jogo/></PrivateRoute>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesApp;