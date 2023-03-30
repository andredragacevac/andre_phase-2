import { useState } from "react";

const DunkForm = ({onAddDunk}) =>{

    const initialValues = {
        silhouette: "",
        name: "",
        date: "",
        retail: "",
        resell: "",
        about: "",
    }

    const [formData, setFormData ] = useState(initialValues);

    const { silhouette, name, releasedate, resellprice, retailprice, about} = formData;

    const handleOnChange =(e) => {

     const { name, value } = e.target;

     setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddDunk(formData)

        setFormData(initialValues)
    }

    return(
        <form className="dunk-form" onSubmit={handleSubmit}>
            <h1>Form</h1>
            <h3>Add Your Favorite Dunks</h3>

            <label >SB Dunk: </label>
            <select type="text"
                name="silhouette"
                value={silhouette}
                onChange={handleOnChange}
            >
                <option>Choose Silhouette</option>
                <option value="SB Dunk High">High</option>
                <option value="SB Dunk Low">Low</option>
            </select>

            <label>Name: </label>
            <input type="text"
                placeholder="enter dunk name"
                name="name"
                value={name}
                onChange={handleOnChange}
            />

            <label>Release Date:</label>
            <input type="text" 
                placeholder="enter release date" 
                name="date"
                value={releasedate}
                onChange={handleOnChange}
            />

            <label>Retail Price:</label>
            <input type="retail" 
                placeholder="enter retail price"
                name="retail"
                value={retailprice}
                onChange={handleOnChange}
            />

            <label>Resell Price:</label>
            <input type="text" 
                placeholder="enter most recent resell price"
                name="resell"
                value={resellprice}
                onChange={handleOnChange}
            />

            <label>About:</label>
            <input type="text" 
                placeholder="Any fun facts!"
                name="about"
                value={about}
                onChange={handleOnChange}
            />
            <button type="submit">Add Dunk</button>
        </form>
    )
}
export default DunkForm;