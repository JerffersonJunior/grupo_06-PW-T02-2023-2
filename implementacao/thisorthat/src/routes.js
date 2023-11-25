import { BrowserRouter, Routes, Route } from "react-router-dom"

import Categories from "./pages/Categories"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Profile from './pages/Profile'
import Game from './pages/Game'
import Challenge from './pages/Challenge'
import Forum from './pages/Forum'
import Publish from './pages/Publish'
import NotFound from './pages/NotFound'
<<<<<<< HEAD

=======
import Ranking from "./pages/RankingImage"
>>>>>>> ca2ceb52bab2378950611a8b06f28459f03c0854
import PrivateRoute from "./components/PrivateRouter"
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
        <Route path="/game" element={<PrivateRoute><Game/></PrivateRoute>} />
        <Route path="/challenge" element={<PrivateRoute><Challenge/></PrivateRoute>} />
        <Route path="/forum" element={<PrivateRoute><Forum/></PrivateRoute>} />
<<<<<<< HEAD
        <Route path="/forum/publish" element={<PrivateRoute><Publish/></PrivateRoute>} />
        
=======
        <Route path="/publicar" element={<PrivateRoute><Publicar/></PrivateRoute>} />
        <Route path="/ranking" element={<PrivateRoute><Ranking/></PrivateRoute>} />
>>>>>>> ca2ceb52bab2378950611a8b06f28459f03c0854
        <Route path="*" element={<PrivateRoute><NotFound/></PrivateRoute>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesApp;