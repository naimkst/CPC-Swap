import React from 'react'

export default function News() {
  return (
    <div className='py-[100px]'>
      <div className='container m-auto w-[67%]'>
        <div>
          <h2 className='text-[32px] flex justify-center'>Latest News</h2>
        </div>
        <div className=' grid grid-cols-3 gap-10 mt-16'>
          <div className='hover:cursor-pointer'>
            <div>
              <img src='/assets/images/blog1.jpeg' className=' h-60 w-full object-cover' alt='' />
            </div>
            <div>
              <h3 className='text-[20px] font-[500] mt-3 hover:cursor-pointer'>Tokenlon Weekly</h3>
              <p className='text-[15px] text-gray-400'>06-03-2022</p>
            </div>
          </div>
          <div className='hover:cursor-pointer'>
            <div>
              <img src='/assets/images/blog2.png' className=' h-60 w-full object-cover' alt='' />
            </div>
            <div>
              <h3 className='text-[20px] font-[500] mt-3 hover:cursor-pointer'>Tokenlon Weekly</h3>
              <p className='text-[15px] text-gray-400'>06-03-2022</p>
            </div>
          </div>
          <div className='hover:cursor-pointer'>
            <div>
              <img src='/assets/images/blog3.png' className=' h-60 w-full object-cover' alt='' />
            </div>
            <div>
              <h3 className='text-[20px] font-[500] mt-3 hover:cursor-pointer'>Tokenlon Weekly</h3>
              <p className='text-[15px] text-gray-400'>06-03-2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
