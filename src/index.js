import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/index.scss';
import Header from './components/Header/header';
import Home from './pages/Home/';
import About from './pages/About/about';
import Footer from './components/Footer/footer';
import Error from './pages/Error/error'
import LogementPage from './pages/LogementPage/logementPage';
import { logements } from './datas/logements';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />} />
        {logements.map((logement) => (
          <Route
            key={logement.id}
            path={`/logement/${logement.id}`}
            element={<LogementPage { ...logement } />}
          />
        ))}
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)