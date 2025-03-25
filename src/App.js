import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Home from './components/Home';
import { Container } from '@mui/material';
import Predict from './components/Predict';
import Disclaimer from './components/Disclaimer';
import Wounds from './components/Wounds';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Home />
        <Predict />
        <Disclaimer />
        <Wounds />
        <About />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
