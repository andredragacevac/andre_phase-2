import './App.css';
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap"
import Home from './pages/Home';
import Vote from './pages/Vote';
import Quiz from './pages/Quiz';


function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Vote" element={<Vote />} />
        <Route path="/Quiz" element={<Quiz />} />
      </Routes>
    </Container>
  );
}

export default App;
