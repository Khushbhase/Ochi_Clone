import React from 'react'

function About() {
    return (
    <div className='w-full bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black p-20'>
        <h1 className='font-["Neue montreal"] text-[4vw] p-20 leading-[3.5vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full border-t-[1px] mt-15 pt-10 border-[#e9ff98] flex gap-5'>
            <div className='w-1/2'>
                <h1 className='text-5xl'>
                    Our approach
                </h1>
                <button className='flex gap-10 uppercase items-center px-6 py-4 bg-zinc-900 rounded-full text-white mt-10'>Read More
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div></button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-[#353f0f]'>
                <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" className='w-full h-full object-cover overflow-hidden rounded-xl'/>
            </div>
        </div>
    </div>
  )
}

export default About