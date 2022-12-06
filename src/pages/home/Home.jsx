import './Home.css';
import { motion } from "framer-motion";
import { useEffect } from 'react';

export default function Home ({allCategories, categorie, setCategorie, difficulty, nbQuestions, setDifficulty, setnbQuestions, handleClickStart, isLoading}) {

    const setSelectCategories = () => {
        var allSelect = [];
        for(const cat in allCategories){
            allSelect.push(<option value={allCategories[cat][allCategories[cat].length - 1]} key={cat}>{cat}</option>)
        }

        return allSelect;
    }

    useEffect(() => {
        setSelectCategories()
    }, [])
    
    return(
        <div className="bg-div h-[100vh] w-[100vw]">
            <div className='fixed top-1/2 -translate-y-1/2 text-center w-full'>
                <div className='text-center text-3xl sm:text-5xl 2xl:text-7xl text-white'>
                    My Culture Training
                </div>
                <div className='text-center sm:text-xl text-md italic text-slate-700 mt-10'>
                    Train your culture here with series of questions !
                </div>
                <div>

                </div>
                <div className='text-centertext-3xl text-white'>
                    <div className='text-sm text-black mt-10 mb-10 grid md:grid-cols-3 grid-cols2 gap-2 text-center p-10'>
                        <select name='selectCats' value={categorie} onChange={(e) => setCategorie(e.target.value)} className='rounded-full p-1 md:text-xl text-md '>
                            <option value=''>== All categories ==</option>
                            {
                                setSelectCategories()
                            }
                        </select>
                        
                        <select name='selectCats' value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className='rounded-full p-1 md:text-xl text-md'>
                            <option value=''>== All difficulties ==</option>
                            <option value='easy'>Easy</option>
                            <option value='medium'>Medium</option>
                            <option value='hard'>Hard</option>
                        </select>
                        <div className='p-1'>
                            <label htmlFor='nbQuestions' className='md:text-xl text-md'>Number of questions: {nbQuestions}</label>
                            <input name='nbQuestions' type='range' min={1} max={50} value={nbQuestions} onChange={(e) => setnbQuestions(parseInt(e.target.value))} />
                        </div>
                        
                    </div>
                    <div>
                        {
                            isLoading ?
                                <p>Loading ...</p>
                            :
                                <motion.button
                                    whileHover={{
                                        scale: 1.5
                                    }}
                                    onClick={handleClickStart}
                                    className='ring-2 p-3 rounded-lg text-5xl'
                                >
                                    Let's Train !
                                </motion.button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}