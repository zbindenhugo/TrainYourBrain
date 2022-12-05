import './Home.css';
import { motion } from "framer-motion";

export default function Home ({difficulty, setDifficulty, categorie, setCategorie, nbQuestions, setnbQuestions, handleClickStart, isLoading}) {
    return(
        <div className="bg-div h-[100vh] w-[100vw]">
            <div className='absolute sm:mt-[15%] sm:ml-[25%]'>
                <div className='text-center sm:text-[6rem] text-3xl text-white'>
                    My Culture Training
                </div>
                <div className='text-center text-xl italic text-slate-700 mt-10'>
                    Train your culture here with series of questions !
                </div>
                <div>

                </div>
                <div className='text-center mt-20 text-3xl text-white'>
                    {
                        isLoading ?
                            <p>Loading ...</p>
                        :
                            <motion.button
                                whileHover={{
                                    scale: 1.5
                                }}
                                onClick={handleClickStart}
                                className='ring-2 p-3 rounded-lg'
                            >
                                Let's Train !
                            </motion.button>
                    }
                    
                </div>
            </div>
        </div>
    )
}