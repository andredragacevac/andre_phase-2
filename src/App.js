import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Vote from './pages/Vote';
import Form from './pages/Form';
import QuizPage from './pages/QuizPage';
import Navbar from './components/Navbar';
import { useEffect, useState } from "react";

function App() {
  const [dunks, setDunks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect (() => {
    fetch("http://localhost:4000/dunks")
      .then(res=> res.json())
      .then(dunks => setDunks(dunks))
  }, []);
  // useEffect (() => {
  //   fetch("http://localhost:4000/dunks")
  //     .then(res=> res.json())
  //     .then(dunks => setDunks(dunks))
  // }, []);

  //SearchBar
  const filteredDunks = dunks.filter(dunk => {
    return dunk.name.toLowerCase().includes(searchQuery.toLowerCase());
  })

  //Quiz

  //Form
  const onAddDunk = (newDunk) =>{
    setDunks([...dunks, newDunk])
  }


  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home 
            setSearchQuery={setSearchQuery} 
            filteredDunks={filteredDunks}/>}
            >
          </Route>

          <Route path="/Vote" element={<Vote 
              dunks={dunks}
             />}
            >
            
          </Route>

          <Route path="/Form" element={<Form 
            onAddDunk={onAddDunk}/>}
            >
          </Route>

          <Route path="/Quiz" element={<QuizPage 
            dunks={dunks}/>}
            >
          </Route>

        </Routes>
      </div>

  );
}

export default App;
