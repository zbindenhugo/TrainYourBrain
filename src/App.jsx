import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Question from './pages/question/Question';
import Results from './pages/results/Results';
import { useEffect } from 'react';
import QuestionDesign from './pages/question/QuestionDesign';

function App() {
  
  const navigate = useNavigate();
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const [isLoading, toggleIsLoading] = useState(false);

  //Reçu par un fetch
  const [randomQuestions, setrandomQuestions] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  
  const [results, setResults] = useState([]);
  const [difficulty, setDifficulty] = useState('')
  const [categorie, setCategorie] = useState('');
  const [nbQuestions, setnbQuestions] = useState(10);

  async function handleClickStart () {
    
    toggleIsLoading(true);

    const fetchQuestions = async () => {
      //console.log(`https://the-trivia-api.com/api/questions?${difficulty ? 'difficulty=' + difficulty.toLowerCase() + '&' : ''}${categorie ? 'categories=' + categorie.map((cat) => cat.replace(' ', '_').toLowerCase() + ',') + '&' : ''}${nbQuestions !== 10 ? 'limit=' + nbQuestions : 'limit=10'}`);
      return fetch(`https://the-trivia-api.com/api/questions?${difficulty ? 'difficulty=' + difficulty.toLowerCase() + '&' : ''}${categorie ? 'categories=' + categorie.map((cat) => cat.replace(' ', '_').toLowerCase() + ',') + '&' : ''}${nbQuestions !== 10 ? 'limit=' + nbQuestions : 'limit=10'}`)
                .then((response) => response.json())
                .then((responseJson) => {
                  return responseJson;
                })
    }

    await setrandomQuestions(await fetchQuestions());

    toggleIsLoading(false);

  }

  useEffect(() => {
    if(randomQuestions.length > 0)
      navigate(`/questions/${randomQuestions[0].id}`)
  }, [randomQuestions])


  return (
    <Routes>
      <Route path='/' element={<Home categorie={categorie} setCategorie={setCategorie} difficulty={difficulty} nbQuestions={nbQuestions} setDifficulty={setDifficulty} setnbQuestions={setnbQuestions} handleClickStart={handleClickStart} isLoading={isLoading} />} />
      <Route path='/questions/:id' element={<Question questions={randomQuestions} indexQuestion={indexQuestion} setIndexQuestion={setIndexQuestion} setResults={setResults} setScore={setScore} score={score} />} />
      <Route path='/results' element={<Results results={results} questions={randomQuestions} score={score} />} />
    </Routes>
  )
}

export default App
