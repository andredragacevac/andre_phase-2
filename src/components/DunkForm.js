import { useState } from "react";

const DunkForm = () =>{

    const [formData, setFormData ] = useState({
        silhouette: "",
        name: "",
        date: "",
        retail: "",
        resell: "",
        about: "",
    });
    const { silhouette, name, date, resell, retail, about} = formData;

    const handleOnChange =(e) => {

     const { name, value } = e.target;

     setFormData({...formData, [name]: value})
    }
    return(
        <div className="dunk-form">
            <h1>Form</h1>
            <h3>Add Your Favorite Dunks</h3>

            <label >SB Dunk </label>
            <select type="text"
                name="silhouette"
                value={silhouette}
                onChange={handleOnChange}
            >
                <option>Choose Silhouette</option>
                <option value="High">High</option>
                <option value="Low">Low</option>
            </select>
            
            <label>Name: </label>
            <input type="text"
                placeholder="enter dunk name"
                name="name"
                value={formData.name}
                onChange={handleOnChange}
            />

            <label>Release Date</label>
            <input type="text" 
                placeholder="enter release date" 
                name="date"
                value={formData.date}
                onChange={handleOnChange}
            />

            <label>Retail Price</label>
            <input type="retail" 
                placeholder="enter retail price"
                name="retail"
                value={formData.retail}
                onChange={handleOnChange}
            />

            <label>Resell Price</label>
            <input type="text" 
                placeholder="enter most recent resell price"
                name="resell"
                value={formData.resell}
                onChange={handleOnChange}
            />

            <label>About</label>
            <input type="text" 
                placeholder="Any fun facts!"
                name="about"
                value={formData.about}
                onChange={handleOnChange}
            />
        </div>
    )
}
export default DunkForm;