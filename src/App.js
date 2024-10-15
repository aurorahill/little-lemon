import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Homepage from './components/pages/Homepage';
import About from './components/pages/About';
import Reservation from './components/pages/Reservation';
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
          path="/"
          element={<Homepage />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/reservation"
          element={<Reservation />}
        />

        <Route
          path="/order"
          element={<Order />}
        />
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/confirmation"
          element={<Confirmation />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
