import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Results({results, questions, score}){

    const tabQuestAnsw = [];

    for(let i = 0; i < questions.length; i++){
        tabQuestAnsw.push(
            <ul className="text-left border-b border-spacing-1 border-t p-2" key={questions[i].id}>
                <p className="font-bold">{ questions[i].question }</p>
                <li><span className="font-bold">Correct Answer :</span> {questions[i].correctAnswer}   
                </li><span className="font-bold">Your answer :</span> {results[i]}
            </ul>
        )
    }

    return(
        <div className="bg-question xl:w-[100vw] xl:h-[100vh] text-center text-white">
            <div className=" w-full p-10">
                <div className="sm:text-5xl text-xl">
                    {`It's finished ! You have a score of ${score}/${questions.length}`}
                </div>
                <div className="mt-10">
                    Here's a resume of the questions and your answers :
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10">
                        {
                            tabQuestAnsw
                        }
                    </div>
                </div>
                <Link to='/' className="border border-blue-200 p-5 text-3xl rounded-xl">Return to home</Link>
            </div>
        </div>
    )
}