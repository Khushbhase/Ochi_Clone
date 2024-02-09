import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Power4 } from "gsap/all"

const FeatureProjects = () => {


  return (

    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-8xl font-["Neue montreal"] tracking-tight '>Featured Projects</h1>  
        </div>

        <div className='px-20'>
            <div className="cards w-full flex gap-10 mt-10">
                <div className="cardcontainer relative w-1/2 h-[75vh]">
                    <div className="card w-full h-full rounded-xl overflow-hidden">
                        <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" className='w-full h-full bg-cover'/>
                    </div>
                </div>
                <div className="cardcontainer relative w-1/2 h-[75vh] ">
                    <div className=" w-full h-full rounded-xl overflow-hidden">
                        <img src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" className='w-full h-full bg-cover'/>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default FeatureProjects