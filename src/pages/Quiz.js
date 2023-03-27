const Quiz =({dunks}) => {

    return(
        <div className="Quiz">
            <h1>Quiz</h1>
            <h2>Score: 0</h2>
            <div className="question-card">
                <h2>
                    Question: 1 of 5
                </h2>
                <h3 className="question-text"> pays hommage to back to the future</h3>
                <ul>
                    <li>grateful</li>
                    <li>chunky</li>
                    <li>marty</li>
                    <li>freddy</li>
                    <li>Cali</li>
                </ul>

            </div>
            <div className="final-results">
                <h1>Final Results</h1>
                <h2>
                    1 of 5 correct - (%20)
                </h2>
                <button>Restart</button>
            </div>
        </div>
    )
}
export default Quiz;