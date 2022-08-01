import './App.css';
import Home from 'Components/Home';
import Footer from 'Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Restaurants from 'Components/Restaurants';
import Suppliers from 'Components/Suppliers';

function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path="/" element={ <Home />}>
            </Route>
              <Route path="restaurante" element={<Restaurants />} />
              <Route path="furnizori" element={<Suppliers />} />
          </Routes>
          <Footer />
    </BrowserRouter>
  );
}

export default App;
