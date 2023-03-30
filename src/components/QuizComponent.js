import {useState} from "react";
import questions from "../data/questions";

const QuizComponent = () => {
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const optionClicked = (isCorrect) => {
        // Increment the score
        if (isCorrect) {
        setScore(score + 1);
        }
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
    };
    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
    };

    return (
        <>
            <h1>QuizComponent</h1>
            <div className="QuizComponent">
                <h2>Score: {score}</h2>
                {showResults ? (
                <div className="final-results">
                    <h1>Final Results</h1>
                    <h2>
                        {score} of {questions.length} correct - ({(score / questions.length) * 100}%)
                    </h2>
                    <button onClick={()=> restartGame()}>Restart</button>
                </div>
                ) : (
                <div className="question-card">

                    <h2>
                        Question: {currentQuestion} of {questions.length}
                    </h2>

                    <h3 className="question-text"> {questions[currentQuestion].text}</h3>
                    
                    <ul>
                        {questions[currentQuestion].options.map((option) => {
                            return (
                                <li className="answers" key={option.id}>
                                    <button  onClick={() => optionClicked(option.isCorrect)}>{option.text}</button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                )}
            </div>
        </>
    )
}
export default QuizComponent;