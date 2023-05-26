//import Logo from './Logos/logo.svg';
import './Style/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Layout/Header/Header.jsx';
import Footer from './Layout/Footer/Footer.jsx';
import Accueil from './Pages/Accueil/Accueil.jsx';
import Logement from './Pages/Logement/Logement.jsx';
import Apropos from './Pages/Apropos/Apropos.jsx';
import Error404 from './Pages/Error404/Error404.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Logement/:id" element={<Logement />} />

          <Route path="/APropos" element={<Apropos />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
