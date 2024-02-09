import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {

  return (
    <div data-scroll data data-scroll-speed="-0.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textstructure mt-52 px-20 ">
            {["We Create", "Eye Opening", "Presentations"].map((item,index)=>(
                <div className='masker'>
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index === 1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease: [0.76,0,0.24,1], duration: 1}} className='w-[8vw] h-[5vw] bg-red-50 relative -top-0.5 mr-[1vw] rounded-lg'></motion.div>)}
                        <h1 className='uppercase text-[7vw] leading-[6.5vw] tracking-tighter font-medium  font-["Test Founders Grotesk X-Cond SmBd"]'>{item}
                        </h1>

                    </div>
                </div>
            ))}

        </div>
        <div className='border-t-[1px] border-zinc-800 mt-[5vw] flex justify-between items-center py-5 px-20'>
            {["For Public and private companies", "From the first pitch to IPO"].map((item,index) => (
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[2px] rounded-full border-zinc-500 font-light text-md uppercase'>Start the project
                </div>
                <div className='w-10 h-10 rounded-full border-zinc-400 border-[1px] flex items-center justify-center'>
                    <span className='rotate-[45deg]'>
                    <FaArrowUpLong />

                    </span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Landing