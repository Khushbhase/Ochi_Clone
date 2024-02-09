import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex gap-5 px-32 items-center'>
        <div className='cardContainer w-1/2 h-[50vh]'>
            <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" className='w-32'/>
                <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full '>&copy; 2019</button>
            </div>
        </div>
        <div className='cardContainer w-1/2 h-[50vh] flex gap-5 '>
            <div className="card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" className='w-32' alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full '>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className="card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" className='w-32'/>
                <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full'>BUSINESS BOOTCAMP</button>
            </div>
            </div>
    </div>
  )
}

export default Cards