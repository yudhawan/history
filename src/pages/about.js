import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons'
function About() {
  const navigate = useNavigate()
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col lg:w-[90vw] lg:px-10 w-96 h-auto py-8 rounded-lg bg-transparent backdrop-blur-md justify-center items-center space-y-2'>
        <div className={` w-full flex px-3 justify-between`}>
          <div className='relative self-start px-3 py-1 lg:py-1 lg:px-1 rounded-full bg-[#FF8C34] order-first text-white cursor-pointer' onClick={()=> navigate('/')}>
            <div className='flex justify-center items-center px-3 py-1 lg:py-0 lg:px-2 rounded-full bg-[#FF8C34]'><FontAwesomeIcon icon={faAngleLeft} size={'lg'} /> </div>
          </div>
          <div className='font-semibold text-white text-xl bg-[#FF8C34] px-2 rounded-md'>About</div>
        </div>
        <div className='flex lg:flex-row flex-col w-full bg-white rounded-lg lg:p-4 p-2 lg:space-x-4 lg:w-[50vw]'>
          <div className='flex-col w-full lg:w-[25vw]'>
            <div className='underline underline-offset-2 text-xl lg:text-2xl text-orange-600'>About</div>
            <p>Website Gasing: Galaxy of Singhasari adalah website pembelajaran khusus untuk membahas materi Kerajaan Singhasari. Website ini menyediakan materi berupa narasi, foto, video pembelajaran, dan juga section kuis untuk evaluasi.</p>
            <br></br>
            <p>Website Gasing dibuat pada Mei 2021 &copy; Nabilatus Saidah, Mahasiswi Pendidikan Sejarah 2017 Universitas Negeri Malang.</p>
          </div>
          <div className='overflow-hidden rounded-tl-xl rounded-br-xl w-full lg:w-[25vw]'>
            <img src="https://jejakpiknik.com/wp-content/uploads/2017/10/@yovi_507.jpg" className='w-full h-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About