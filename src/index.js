import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './styles/index.scss';
import Header from './components/Header/header';
import Home from './pages/Home/';
import About from './pages/About/About';
import Footer from './components/Footer/footer';
import Error from './pages/Error/Error'
import LogementPage from './pages/LogementPage/LogementPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path={`/logement/:id`} element={<LogementPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)