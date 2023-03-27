const DunkForm = () =>{
    return(
        <div className="dunk-form">
            <h3>Add Your Favorite Dunks</h3>

            <label >SB Dunk </label>
            <select name="silhouette" id="silhouette">
                <option value="">Choose Silhouette</option>
                <option value="">High</option>
                <option value="">Low</option>
            </select>

            <label>Name: </label>
            <input type="text"/>

            <label>Release Date</label>
            <input type="text"/>

            <label>Retail Price</label>
            <input type="text"/>

            <label>Resell Price</label>
            <input type="text"/>

            <label>About</label>
            <input type="text" placeholder="Any fun facts!"></input>



        </div>
    )
}
export default DunkForm;