import DunkItem from "../components/DunkItem";
const Home =({dunks}) => {
const DunkItems = dunks.map((dunk) => {
    return <DunkItem key={dunk.id} {...dunk}/>
})

    return(
        <div>
            <h1>Home</h1>
            <p>This is a paragraph about what my application is about. </p>
            <button>Show all Dunks</button>
            <ul>{DunkItems} </ul>
        </div>
        
    )
}
export default Home;