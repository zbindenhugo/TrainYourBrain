import './Question.css'
import {motion} from 'framer-motion'

export default function QuestionDesign(){

    return(
        <div className="bg-question h-[100vh] w-[100vw] text-white">
            <div className="fixed text-center mt-[15%] left-1/2 -translate-x-1/2">
                <div>
                    <div className="text-5xl ">
                        Which author wrote 'The Ugly Duckling'?
                    </div>
                    <div className="text-md text-center italic text-slate-300">
                        Arts & Literature - Easy
                    </div>
                </div>
                <div className="p-10">
                    <div className="grid sm:grid-cols-4 grid-cols-2 text-center gap-10">
                        <motion.button 
                            className="ring-2 ring-blue-200 text-center p-1 rounded-3xl"
                            whileHover={{ scale: 1.1 }}
                        >Colombia</motion.button>
                        <motion.button 
                            className="ring-2 ring-blue-200 text-center p-1 rounded-3xl"
                            whileHover={{ scale: 1.1 }}
                        >Colombia</motion.button>
                        <motion.button 
                            className="ring-2 ring-blue-200 text-center p-1 rounded-3xl"
                            whileHover={{ scale: 1.1 }}
                        >Colombia</motion.button>
                        <motion.button 
                            className="ring-2 ring-blue-200 text-center p-1 rounded-3xl"
                            whileHover={{ scale: 1.1 }}
                        >Colombia</motion.button>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}