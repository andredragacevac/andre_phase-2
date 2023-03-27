const DunkItem = ( {silhouette, name, releasedate} ) => {
    return (
        <div>
            <h2>DunkItem</h2>
            <p>{silhouette}: {name}</p>
            <p>{releasedate}</p>
        </div>

    )
}

export default DunkItem;