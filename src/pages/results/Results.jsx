import { useEffect } from "react";

export default function Results({results, questions}){

    var score = 0;

    const calcScore = () => {
        for(let i = 0; i < questions.length; i++){
            const j = i + 1;

            if(results[j] === questions[i])
                score += 1;
        }
    }

    useEffect(() => {
        calcScore();
    }, [questions])

    return(
        <div>
            {
                questions ? score : 'Waiting for results ...'
            }
        </div>
    )
}