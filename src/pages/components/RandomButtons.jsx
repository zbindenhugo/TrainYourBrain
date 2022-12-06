import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function RandomButtons({ x, questions, indexQuestion, handleCorrectAnswerClick, handleIncorrectAnswerClick}){

    switch(x){
        case 0:
            return(
                <div className="grid sm:grid-cols-4 grid-cols-1 text-center gap-10">
                    <Link 
                        to={indexQuestion === questions.length - 1 ? '/results' : `/questions/${questions[indexQuestion].id}`}
                        onClick={(e) => handleCorrectAnswerClick(e)} 
                        className="ring-2 ring-blue-200 text-center p-1 rounded-3xl transition-all duration-200 hover:scale-110"
                        
                        
                    >
                        {questions[indexQuestion].correctAnswer}
                    </Link>
                    <Link 
                        to={indexQuestion === questions.length - 1 ? '/results' : `/questions/${questions[indexQuestion].id}`}
                        onClick={(e) => handleIncorrectAnswerClick(e)}
                        className="ring-2 ring-blue-200 text-center p-1 rounded-3xl transition-all duration-200 hover:scale-110"
                        
                    >
                        {questions[indexQuestion].incorrectAnswers[0]}
                    </Link>
                    <Link 
                        to={indexQuestion === questions.length - 1 ? '/results' : `/questions/${questions[indexQuestion].id}`}
                        onClick={(e) => handleIncorrectAnswerClick(e)}
                        className="ring-2 ring-blue-200 text-center p-1 rounded-3xl transition-all duration-200 hover:scale-110"
                        
                    >
                            {questions[indexQuestion].incorrectAnswers[1]}
                    </Link>
                    <Link 
                        to={indexQuestion === questions.length - 1 ? '/results' : `/questions/${questions[indexQuestion].id}`}
                        onClick={(e) => handleIncorrectAnswerClick(e)}
                        className="ring-2 ring-blue-200 text-center p-1 rounded-3xl transition-all duration-200 hover:scale-110"
                        
                    >
                            {questions[indexQuestion].incorrectAnswers[2]}
                    </Link>
                </div>
            );
        case 1:
            return(
                <div className="grid sm:grid-cols-4 grid-cols-1 text-center gap-10">
                    <Link 
                        to={indexQuestion === questions.length - 1 ? '/results' : `/questions/${questions[indexQuestion].id}`}
                        onClick={(e) => handleIncorrectAnswerClick(e)} 
                        className="ring-2 ring-blue-200 text-center p-1 rounded-3xl transition-all duration-200 hover:scale-110"
                        
                    >
                            {questions[indexQuestion].incorrectAnswers[0]}
                    </Link>
                    <Link 
                        to={indexQuestion === questions.length - 1 ? '/results' : `/questions/${questions[indexQuestion].id}`}
                        onClick={(e) => handleCorrectAnswerClick(e)}
                        className="ring-2 ring-blue-200 text-center p-1 rounded-3xl transition-all duration-200 hover:scale-110"
                        
                    >
                            {questions[indexQuestion].correctAnswer}
                    </Link>
                    <Link 
                        onClick={(e) => handleIncorrectAnswerClick(e)}
                        to={indexQuestion === questions.length - 1 ? '/results' : `/questions/${questions[indexQuestion].id}`}
                        className="ring-2 ring-blue-200 text-center p-1 rounded-3xl transition-all duration-200 hover:scale-110"
                        
                    >
                            {questions[indexQuestion].incorrectAnswers[1]}
                    </Link>
                    <Link 
                        to={indexQuestion === questions.length - 1 ? '/results' : `/questions/${questions[indexQuestion].id}`}
                        onClick={(e) => handleIncorrectAnswerClick(e)}
                        className="ring-2 ring-blue-200 text-center p-1 rounded-3xl transition-all duration-200 hover:scale-110"
                        
                    >
                            {questions[indexQuestion].incorrectAnswers[2]}
                    </Link>
                </div>
            );
        case 2:
            return(
                <div className="grid sm:grid-cols-4 grid-cols-1 text-center gap-10">
                    <Link 
                        to={indexQuestion === questions.length - 1 ? '/results' : `/questions/${questions[indexQuestion].id}`}
                        onClick={(e) => handleIncorrectAnswerClick(e)} 
                        className="ring-2 ring-blue-200 text-center p-1 rounded-3xl transition-all duration-200 hover:scale-110"
                        
                    >
                            {questions[indexQuestion].incorrectAnswers[0]}
                    </Link>
                    <Link 
                        to={indexQuestion === questions.length - 1 ? '/results' : `/questions/${questions[indexQuestion].id}`}
                        onClick={(e) => handleIncorrectAnswerClick(e)}
                        className="ring-2 ring-blue-200 text-center p-1 rounded-3xl transition-all duration-200 hover:scale-110"
                        
                    >
                            {questions[indexQuestion].incorrectAnswers[1]}
                    </Link>
                    <Link 
                        to={indexQuestion === questions.length - 1 ? '/results' : `/questions/${questions[indexQuestion].id}`}
                        onClick={(e) => handleCorrectAnswerClick(e)}
                        className="ring-2 ring-blue-200 text-center p-1 rounded-3xl transition-all duration-200 hover:scale-110"
                        
                    >
                            {questions[indexQuestion].correctAnswer}
                    </Link>
                    <Link 
                        to={indexQuestion === questions.length - 1 ? '/results' : `/questions/${questions[indexQuestion].id}`}
                        onClick={(e) => handleIncorrectAnswerClick(e)}
                        className="ring-2 ring-blue-200 text-center p-1 rounded-3xl transition-all duration-200 hover:scale-110"
                        
                    >
                            {questions[indexQuestion].incorrectAnswers[2]}
                    </Link>
                </div>
            );
        case 3:
            return(
                <div className="grid sm:grid-cols-4 grid-cols-1 text-center gap-10">
                    <Link 
                        to={indexQuestion === questions.length - 1 ? '/results' : `/questions/${questions[indexQuestion].id}`}
                        onClick={(e) => handleIncorrectAnswerClick(e)}
                        className="ring-2 ring-blue-200 text-center p-1 rounded-3xl transition-all duration-200 hover:scale-110"
                        
                    >
                            {questions[indexQuestion].incorrectAnswers[0]}
                    </Link>
                    <Link 
                        to={indexQuestion === questions.length - 1 ? '/results' : `/questions/${questions[indexQuestion].id}`}
                        onClick={(e) => handleIncorrectAnswerClick(e)}
                        className="ring-2 ring-blue-200 text-center p-1 rounded-3xl transition-all duration-200 hover:scale-110"
                        
                    >
                            {questions[indexQuestion].incorrectAnswers[1]}
                    </Link>
                    <Link 
                        to={indexQuestion === questions.length - 1 ? '/results' : `/questions/${questions[indexQuestion].id}`}
                        onClick={(e) => handleIncorrectAnswerClick(e)}
                        className="ring-2 ring-blue-200 text-center p-1 rounded-3xl transition-all duration-200 hover:scale-110"
                        
                    >
                            {questions[indexQuestion].incorrectAnswers[2]}
                    </Link>
                    <Link 
                        to={indexQuestion === questions.length - 1 ? '/results' : `/questions/${questions[indexQuestion].id}`}
                        onClick={(e) => handleCorrectAnswerClick(e)} 
                        className="ring-2 ring-blue-200 text-center p-1 rounded-3xl transition-all duration-200 hover:scale-110"
                        
                    >
                            {questions[indexQuestion].correctAnswer}
                    </Link>
                </div>
            );
    }   

}