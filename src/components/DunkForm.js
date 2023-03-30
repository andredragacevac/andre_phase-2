import { useState } from "react";

const DunkForm = () =>{
    
    const [ date, dateSetter ] = useState("");

    const handleDate = (e) => {
        dateSetter(e.target.value);
    }


    return(
        <div className="dunk-form">
            <h1>Form</h1>
            <h3>Add Your Favorite Dunks</h3>

            <label >SB Dunk </label>
            <select name="silhouette" id="silhouette">
                <option value="">Choose Silhouette</option>
                <option value="">High</option>
                <option value="">Low</option>
            </select>

            <label>Name: </label>
            <input type="text"placeholder="enter dunk name"/>

            <label>Release Date</label>
            <input type="text" 
                placeholder="enter release date" 
                value={date}
                onChange={handleDate}
            />

            <label>Retail Price</label>
            <input type="text" placeholder="enter retail price"/>

            <label>Resell Price</label>
            <input type="text" placeholder="enter most recent resell price"/>

            <label>About</label>
            <input type="text" placeholder="Any fun facts!"></input>
        </div>
    )
}
export default DunkForm;