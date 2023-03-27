const DunkItem = ( {silhouette, name, releasedate} ) => {
    return (
        <li className="dunk">
            <h2>DunkItem</h2>
            <p>{silhouette}: {name}</p>
            <p>{releasedate}</p>
        </li>

    )
}

export default DunkItem;