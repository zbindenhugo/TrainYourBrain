import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Results({results, questions}){

    const tabQuestAnsw = [];
    var score = 0;

    const calcScore = () => {
        for(let i = 0; i < questions?.length; i++){
            if(questions[i]?.correctAnswer === results[i])
                score++;
        }
    }

    calcScore();

    for(let i = 0; i < questions?.length; i++){
        tabQuestAnsw.push(
            <ul className="text-left border-b border-spacing-1 border-t p-2" key={questions[i]?.id}>
                <p className="font-bold">{i + 1 + '. ' + questions[i]?.question }</p>
                <li><span className="font-bold">Correct Answer :</span> {questions[i]?.correctAnswer}   
                </li><span className="font-bold">Your answer :</span> {results[i]}
            </ul>
        )
    }

    return(
        <div className="text-center text-white">
            <div className="p-10">
                <div className="md:text-7xl text-3xl">
                    It's finished ! You have a score of <span className="font-bold italic">{`${score}/${questions.length}`}</span>
                </div>
                <div className="mt-10 mb-10 ">
                    <span className="md:text-3xl">Here's a resume of the questions and your answers :</span>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10">
                        {
                            tabQuestAnsw
                        }
                    </div>
                </div>
                <div className="transition-all duration-200 hover:scale-110 left-1/2">
                    <Link to='/' className="border-2 border-blue-200 p-3 text-3xl rounded-xl ">Return to home</Link>
                </div>
            </div>
        </div>
    )
}