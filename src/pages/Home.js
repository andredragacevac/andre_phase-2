import DunkItem from "../components/DunkItem";
import { useState } from "react";

const Home =({dunks}) => {
    
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) =>{
        setSearchQuery(e.target.value)
    }

    const filteredDunks = dunks.filter(dunk => {
        return dunk.name.toLowerCase().includes(searchQuery.toLowerCase());
    })

    const dunkItems = filteredDunks.map((dunk) => {
        return <DunkItem key={dunk.id} {...dunk}/>
    })

    return(
        <div>
            <h1>Home</h1>
            <p>This is a paragraph about what my application is about. </p>
            <button>Show all Dunks</button>
            <input onChange={handleSearch} type="text" placeholder="search..."/>
            <ul className="cards">{dunkItems} </ul>
        </div>
        
    )
}
export default Home;