import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Homepage from './components/pages/Homepage';
import About from './components/pages/About';
import Reservation from './components/pages/BookingPage';
import Order from './components/pages/Order';
import Login from './components/pages/Login';
import Confirmation from './components/pages/Confirmation';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/little-lemon"
          element={<Homepage />}
        />

        <Route
          path="/little-lemon/about"
          element={<About />}
        />

        <Route
          path="/little-lemon/reservation"
          element={<Reservation />}
        />

        <Route
          path="/little-lemon/order"
          element={<Order />}
        />
        <Route
          path="/little-lemon/login"
          element={<Login />}
        />

        <Route
          path="/little-lemon/confirmation"
          element={<Confirmation />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
