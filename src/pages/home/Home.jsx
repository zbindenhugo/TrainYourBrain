import './Home.css';
import { motion } from "framer-motion";

export default function Home ({handleClickStart, isLoading}) {
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