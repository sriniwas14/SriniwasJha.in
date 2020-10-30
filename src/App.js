import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />

      <div class="cs_brand" href="#">Sriniwas<b>Jha</b></div>
      <div class="cs_subhead">Coder | Gamer | Geek</div>

      <Hero />

    </div>
  );
}

export default App;
