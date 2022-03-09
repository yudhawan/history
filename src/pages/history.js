import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Candi from '../candi2.png'
import HandTab from '../handtablet.png'
import Books from '../books.png'
import Sejarah from '../components/history/Sejarah'
import Video from '../components/history/Video'
import Referensi from '../components/history/Referensi'
function History() {
  const navigate = useNavigate()
  const [sejarah,setsejarah]=useState(false)
  const [video,setvideo]=useState(false)
  const [referensi,setreferensi]=useState(false)
  const handleSejarah=()=> setsejarah(!sejarah)
  const handleVideo=()=> setvideo(!video)
  const handleReferensi=()=> setreferensi(!referensi)
  return (
    <div className='flex justify-center items-center'>
      {
        (sejarah || video || referensi)?<>
        {sejarah&&<Sejarah show={sejarah} handleSejarah={handleSejarah}/>}
        {video&&<Video show={video} handleVideo={handleVideo} />}
        {referensi&&<Referensi show={referensi} handleReferensi={handleReferensi} />}
        </>:
      
      <div className={`${sejarah?'hidden':'block'}flex flex-col lg:w-auto lg:px-10 w-80 h-auto py-8 rounded-lg bg-transparent backdrop-blur-md justify-center items-center space-y-2`}>        
        <div className='w-full flex px-3 justify-between'>
          <div className='font-semibold text-white text-xl px-2 rounded-md flex space-x-1 cursor-pointer' onClick={()=> navigate('/')}>
            <div className='flex justify-center items-center px-3 py-1 lg:py-0 lg:px-2 rounded-full bg-[#EE5D5A]'><FontAwesomeIcon icon={faAngleLeft} size={'lg'} /> </div>
          </div>
          <div className='font-semibold text-white text-xl bg-[#EE5D5A] px-2 rounded-md'>Section 1: History</div>
        </div>
        <div className='flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4'>
        <div className='cursor-pointer active:animate-ping items-center flex flex-col' onClick={handleSejarah} >
          <div className='w-60 h-32'>
            <img src={Candi} className='w-full h-full rounded-sm'/>
          </div>
          <div className='bg-[#EE5D5A] text-white py-1 px-2 text-center rounded-sm font-semibold w-60'>Asal-usul Kerajaan Singhasari</div>
        </div>
        <div className='cursor-pointer active:animate-ping items-center flex flex-col' onClick={handleVideo}>
          <div className='bg-gray-600 rounded-sm w-60 h-32 justify-center flex items-center'>
            <img src={HandTab} className='w-full h-full'/>
          </div>
          <div className='bg-[#EE5D5A] text-white py-1 px-2 text-center rounded-sm font-semibold w-60'>Video Pembelajaran</div>
        </div>
        <div className='cursor-pointer active:animate-ping items-center flex flex-col' onClick={handleReferensi}>
          <div className='bg-gray-600 rounded-sm w-60 h-32 justify-center flex items-center'>
            <img src={Books} className='w-full h-full'/>
          </div>
          <div className='bg-[#EE5D5A] text-white py-1 px-2 text-center rounded-sm font-semibold w-60'>Referensi</div>
        </div>
        </div>
      </div>
      }
    </div>
  )
}

export default History