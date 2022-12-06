import { useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Question from './pages/question/Question';
import Results from './pages/results/Results';
import { useEffect } from 'react';

function App() {
  
  const navigate = useNavigate();
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const [isLoading, toggleIsLoading] = useState(false);

  //Reçu par un fetch
  const [randomQuestions, setrandomQuestions] = useState([]);
  const [allCategories, setAllCategories] = useState({});
  
  const [results, setResults] = useState([]);
  const [difficulty, setDifficulty] = useState('')
  const [categorie, setCategorie] = useState('');
  const [nbQuestions, setnbQuestions] = useState(10);

  async function handleClickStart () {
    
    toggleIsLoading(true);

    await setrandomQuestions([]);
    await setResults([]);
    await setIndexQuestion(0);


    const fetchQuestions = async () => {
      return await fetch(`https://the-trivia-api.com/api/questions?${difficulty ? 'difficulty=' + difficulty.toLowerCase() + '&' : ''}${categorie ? 'categories=' + categorie + '&' : ''}${nbQuestions !== 10 ? 'limit=' + nbQuestions : 'limit=10'}`)
                .then((response) => response.json())
                .then((responseJson) => {
                  return responseJson;
                })
    }

    await setrandomQuestions(await fetchQuestions());

    toggleIsLoading(false);

  }

  useEffect(() => {
    const fetchCategories = async () => {
      await fetch('https://the-trivia-api.com/api/categories')
        .then((response) => response.json())
        .then((responseJson) => {
          setAllCategories(responseJson);
        })
    }

    fetchCategories();

  }, [])

  useEffect(() => {
    if(randomQuestions.length > 0)
      navigate(`/questions/${randomQuestions[0]?.id}`)
  }, [randomQuestions])


  return (
    <Routes>
      <Route path='/' element={<Home categorie={categorie} setCategorie={setCategorie} difficulty={difficulty} nbQuestions={nbQuestions} setDifficulty={setDifficulty} setnbQuestions={setnbQuestions} handleClickStart={handleClickStart} isLoading={isLoading} allCategories={allCategories} />} />
      <Route path='/questions/:id' element={<Question questions={randomQuestions} indexQuestion={indexQuestion} setIndexQuestion={setIndexQuestion} setResults={setResults} setScore={setScore} score={score} />} />
      <Route path='/results' element={<Results results={results} questions={randomQuestions} score={score} />} />
    </Routes>
  )
}

export default App
