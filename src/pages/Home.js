import DunkItem from "../components/DunkItem";
import { useState } from "react";

const Home =({ setSearchQuery, filteredDunks }) => {

    const handleSearch = (e) =>{
        setSearchQuery(e.target.value)
    }

    

    const dunkItems = filteredDunks.map((dunk) => {
        return <DunkItem key={dunk.id} {...dunk}/>
    })

    return(
        <div>
            <h1>Home</h1>
            <p>This is a paragraph about what my application is about. </p>
            <input className="searchbar" onChange={handleSearch} type="text" placeholder="Search Dunks..."/>
            <ul className="cards">{dunkItems} </ul>
        </div>
        
    )
}
export default Home;