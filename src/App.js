import './App.css';
import Home from 'Components/Home';
import Footer from 'Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Restaurante from 'Components/Restaurante';

function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path="/" element={ <Home />}>
            </Route>
              <Route path="restaurante" element={<Restaurante />} />
          </Routes>
          <Footer />
    </BrowserRouter>
  );
}

export default App;
