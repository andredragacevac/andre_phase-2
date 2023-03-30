import { useState } from "react";

const DunkForm = ({onAddDunk}) =>{

    const initialValues = {
        silhouette: "",
        name: "",
        releasedate: "",
        retailprice: "",
        resellprice: "",
        about: "",
    }

    const [formData, setFormData ] = useState(initialValues);

    const { silhouette, name, releasedate, resellprice, retailprice, about} = formData;

    const handleFormData =(e) => {
     const { name, value } = e.target;
     setFormData({...formData, [name]: value})
    }

    const configPOST = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:4000/dunks", configPOST )
            .then(res => res.json)
            .then(newDunk => {
                onAddDunk(newDunk);
            }
        )
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
                onChange={handleFormData}
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
                onChange={handleFormData}
            />

            <label>Release Date:</label>
            <input type="text" 
                placeholder="enter release date" 
                name="releasedate"
                value={releasedate}
                onChange={handleFormData}
            />

            <label>Retail Price:</label>
            <input type="retail" 
                placeholder="enter retail price"
                name="retailprice"
                value={retailprice}
                onChange={handleFormData}
            />

            <label>Resell Price:</label>
            <input type="text" 
                placeholder="enter most recent resell price"
                name="resellprice"
                value={resellprice}
                onChange={handleFormData}
            />

            <label>About:</label>
            <input type="text" 
                placeholder="Any fun facts!"
                name="about"
                value={about}
                onChange={handleFormData}
            />
            <button type="submit">Add Dunk</button>
        </form>
    )
}
export default DunkForm;