import React from 'react'


export default function CustomMenuItem({image,title,description,price}) {
  return (
    <div>
    <div className="w-full max-w-sm bg-primary-gray border-gray-200 rounded-lg shadow ">
        
           <div className='flex justify-center'>
           <img className="rounded-full w-60 h-60  " src={image} alt="product image" />
           </div>
      

        <div className="px-5 pb-5">
          
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
           
            <p className='tracking-widest text-gray-500 md:text-lg dark:text-gray-40'>
                    {description}
            </p>
           
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>

                <button  className="custom__button">Command</button>
            </div>
        </div>
    </div>
    </div>
  )
}
