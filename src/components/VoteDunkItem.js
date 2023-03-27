import {useState} from "react";
const VoteDunkItem =({ silhouette, name, releasedate, retailprice, resellprice, likes }) => {

    const [likeCount, setLikeCount] = useState(0);

    const handleClick = () => {
        setLikeCount(prevCount => prevCount + 1);
    }

    return(
        <div>
            <h1>VoteDunkItem</h1>
            <p>{silhouette}: {name}</p>
            <p>{releasedate}</p>
            <p>Retail price: {retailprice}</p>
            <p>Resell Price: {resellprice}</p>
            <button onClick={handleClick}> Likes: {likeCount}</button>
        </div>
        
    )
}
export default VoteDunkItem;