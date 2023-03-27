import {useState} from "react";
const VoteDunkItem =({ silhouette, name, releasedate, retailprice, resellprice, likes }) => {

    const [likeCount, setLikeCount] = useState(0);

    const handleClick = () => {
        setLikeCount(prevCount => prevCount + 1);
    }

    return(
        <li className="vote-dunk">
            <h1>VoteDunkItem</h1>
            <p>{silhouette}: {name}</p>
            <p>{releasedate}</p>
            <p>Retail Price: {retailprice}</p> <p>Resell Price: {resellprice}</p>
            <button onClick={handleClick}> Like {likeCount}</button>
        </li>
        
    )
}
export default VoteDunkItem;