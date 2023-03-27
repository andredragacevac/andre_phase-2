const VoteDunkItem =({ silhouette, name, releasedate, retailprice, resellprice, likes }) => {

    return(
        <div>
            <h1>VoteDunkItem</h1>
            <p>{silhouette}: {name}</p>
            <p>{releasedate}</p>
            <p>Retail price: {retailprice}</p>
            <p>Resell Price: {resellprice}</p>
            <p>Likes: {likes}</p>
        </div>
        
    )
}
export default VoteDunkItem;