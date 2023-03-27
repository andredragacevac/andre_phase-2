import './App.css';
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from './pages/Home';
import Vote from './pages/Vote';
import Quiz from './pages/Quiz';
import Navbar from './components/Navbar';
import dunks from './data/dunks';

function App() {
  return (
    <div>
      <Navbar />
      <Home dunks={dunks}/>
    </div>

  );
}

export default App;
