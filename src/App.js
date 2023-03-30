import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Vote from './pages/Vote';
import Quiz from './components/Quiz';
import Navbar from './components/Navbar';
import DunkForm from './components/DunkForm';
import { useEffect, useState } from "react";

function App() {
  const [dunks, setDunks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect (() => {
    fetch("http://localhost:4000/dunks")
      .then(res=> res.json())
      .then(dunks => setDunks(dunks))
  }, []);

  //SearchBar
  const filteredDunks = dunks.filter(dunk => {
    return dunk.name.toLowerCase().includes(searchQuery.toLowerCase());
  })

  //Quiz


  return (
    <div>
      <Navbar />
      <Home
        setSearchQuery={setSearchQuery}
        filteredDunks={filteredDunks}
      />
      <Vote dunks={dunks}/>
      <DunkForm />
      <Quiz dunks={dunks}/>
    </div>

  );
}

export default App;
