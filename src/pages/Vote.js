import VoteDunkItem from "../components/VoteDunkItem"
const Vote =({dunks}) => {
    const votedunkItems = dunks.map((dunk) => {
        return <VoteDunkItem key={dunk.id} {...dunk}/>
    })
    return(
        <div>
            <h1>Vote</h1>
            <ul>{votedunkItems}</ul>    
        </div>
    )
}
export default Vote;