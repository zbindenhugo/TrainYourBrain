import { useEffect } from "react";
import './Question.css'
import RandomButtons from "../components/RandomButtons";

export default function Question( {questions, indexQuestion, setIndexQuestion, setResults, setScore, score} ){

    async function handleIncorrectAnswerClick (e) {
        await setResults((oldResults) => [
            ...oldResults, e.target.text
        ])

        await setIndexQuestion(indexQuestion + 1);
    }

    async function handleCorrectAnswerClick (e) {
        await setResults((oldResults) => [
            ...oldResults, e.target.text
        ])

        await setIndexQuestion(indexQuestion + 1);
        await setScore(score + 1);
    }

    return(
        <div className="bg-question h-[100vh] w-[100vw] text-white">
            <div className="fixed text-center mt-[15%] left-1/2 -translate-x-1/2 w-full p-5">
                <div>
                    <div className="sm:text-5xl text-xl">
                        {
                            questions[indexQuestion].question
                        }
                    </div>
                    <div className="text-md text-center italic text-slate-300">
                        { questions[indexQuestion].category } - { questions[indexQuestion].difficulty }
                    </div>
                </div>
                <div className="sm:p-10 mt-10">
                    <div />
                    {   
                        <RandomButtons x={Math.floor(Math.random() * 4)} questions={questions} indexQuestion={indexQuestion} handleCorrectAnswerClick={handleCorrectAnswerClick} handleIncorrectAnswerClick={handleIncorrectAnswerClick} />
                    }
                    <div />
                </div>
            </div>
        </div>
    )
}