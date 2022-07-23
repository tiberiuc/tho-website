import './App.css';
import Header from 'Components/Header/Header.jsx'
import Home from 'Components/Home';
import Footer from 'Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Restaurante from 'Components/Restaurante';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Routes>
            <Route path="/" element={ <Home />}>
              {/* <Route path="/restaurante" element={<Restaurante />} /> */}
            </Route>
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
