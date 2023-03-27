import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Vote from './pages/Vote';
import Quiz from './pages/Quiz';
import Navbar from './components/Navbar';
import { useState } from "react";

function App() {
  const [dunks, setDunks] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const fetchDunks = () => {
    fetch("http://localhost:4000/dunks")
      .then(res=> res.json())
      .then(dunks => setDunks(dunks))
  }

  const filteredDunks = dunks.filter(dunk => {
    return dunk.name.toLowerCase().includes(searchQuery.toLowerCase());
  })
  return (
    <div>
      <Navbar />
      <Home fetchDunks={fetchDunks}
        setSearchQuery={setSearchQuery}
        filteredDunks={filteredDunks}
      />
      <Vote dunks={dunks}/>
      <Quiz dunks={dunks}/>
    </div>

  );
}

export default App;
