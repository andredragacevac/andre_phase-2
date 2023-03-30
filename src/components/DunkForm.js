import { useState } from "react";

const DunkForm = () =>{

    

    const [ name, nameSetter ] = useState("");

    const [ date, dateSetter ] = useState("");

    const [ retail, retailSetter ] = useState("");

    const handleDate = (e) => {
        dateSetter(e.target.value);
    }
    const handleName = (e) => {
        nameSetter(e.target.value);
    }
    const handleRetail = (e) => {
        retailSetter(e.target.value);
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
            <input type="text"
                placeholder="enter dunk name"
                value={name}
                onChange={handleName}
            />

            <label>Release Date</label>
            <input type="text" 
                placeholder="enter release date" 
                value={date}
                onChange={handleDate}
            />

            <label>Retail Price</label>
            <input type="text" 
                placeholder="enter retail price"
                value={retail}
                onChange={handleRetail}
            />

            <label>Resell Price</label>
            <input type="text" placeholder="enter most recent resell price"/>

            <label>About</label>
            <input type="text" placeholder="Any fun facts!"></input>
        </div>
    )
}
export default DunkForm;