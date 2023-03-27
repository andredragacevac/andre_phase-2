import './App.css';
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap"
import Home from './pages/Home';
import Vote from './pages/Vote';
import Quiz from './pages/Quiz';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Container className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Vote" element={<Vote />} />
          <Route path="/Quiz" element={<Quiz />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
