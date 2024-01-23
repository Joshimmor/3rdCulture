import React from 'react'
import "./BlogFeature.css"
const blogs = [
    {
        title:"Blog template",
        url:"ab2.jpg"
    },
    {
        title:"Blog template",
        url:"ab2.jpg"
    },
    {
        title:"Blog template",
        url:"ab2.jpg"
    },
    {
        title:"Blog template",
        url:"ab2.jpg"
    },
    {
        title:"Blog template",
        url:"ab2.jpg"
    }
]
export default function BlogFeature() {
  return (
    <div className="w-full h-full flex flex-col">
        { blogs.map((n,i )=>{ 
            return(
                <div key={i} className="w-full h-[20vh] flex flex-row flex-grid-2 border border-slate-500 ">
                <div className='w-1/4 h-full'
                style={{
                    backgroundImage:`url(${n.url})`
                }}
                ></div>
                <div className='flex justify-center items-center w-3/4  h-full bg-gray-100 hover:bg-orange-600'>
                    <h1 className='text-[10vw] md:text-[5vw] font-extrabold text-gray-400'>{n.title} </h1>
                </div>
            </div> 
            )
        })}
        <div className='flex flex-col justify-center items-center w-full  h-auto bg-gray-500  border border-slate-500 readmore'>
            <h1 className='text-[10vw] md:text-[5vw] font-extrabold text-gray-400'>READ MORE 3rd CULTURE</h1>
            <span className='border-b-2 border-gray-400 mb-5'></span>
        </div>
    </div>
  )
}
