import { useEffect } from "react";

export default function Results({results, questions, score}){

    const tabQuestAnsw = [];

    for(let i = 0; i < questions.length; i++){
        tabQuestAnsw.push(
            <ul className="text-left">
                <p className="font-bold">{ questions[i].question }</p>
                <li><span className="font-bold">Correct Answer :</span> {questions[i].correctAnswer}   
                </li><span className="font-bold">Your answer :</span> {results[i]}
            </ul>
        )
    }

    return(
        <div className="w-[100vw] h-[100vh] text-center">
            <div className=" w-full p-10">
                <div className="sm:text-5xl text-xl">
                    {`It's finished ! You have a score of ${score}/${questions.length}`}
                </div>
                <div className="mt-10">
                    Here's a resume of the questions and your answers :
                    <div className="grid grid-cols-3 gap-5 mt-10">
                        {
                            tabQuestAnsw
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}