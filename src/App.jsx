import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu.jsx';
import Footer from './components/Footer.jsx';
import Accueil from './pages/Accueil.jsx';
import Professionnel from './pages/Professionnel.jsx';
import Particulier from './pages/Particulier.jsx';
import Realisation from './pages/Realisation.jsx';
import Toiture from './pages/Toiture.jsx';
import Ombriere from './pages/Ombriere.jsx';
import ChampsSolaires from './pages/ChampsSolaires.jsx';
import Agrivoltaisme from './pages/Agrivoltaisme.jsx';
import Recrutement from './pages/Recrutement.jsx';
import Contact from './pages/Contact.jsx';
import Blog from './pages/Blog.jsx';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/professionnel" element={<Professionnel />} />
            <Route path="/particulier" element={<Particulier />} />
            <Route path="/realisation" element={<Realisation />} />
            <Route path="/toiture" element={<Toiture />} />
            <Route path="/ombriere" element={<Ombriere />} />
            <Route path="/champs-solaires" element={<ChampsSolaires />} />
            <Route path="/agrivoltaisme" element={<Agrivoltaisme />} />
            <Route path="/recrutement" element={<Recrutement />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;