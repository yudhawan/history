import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import War from '../angkumang.jpg'
import War2 from '../war2.jpg'
import War3 from '../war3.png'
import Books from '../books.png'
import Sejarah from '../components/kronologi/Sejarah'
import Referensi from '../components/kronologi/Referensi'
import Sejarah2 from '../components/kronologi/Sejarah2'
import Sejarah3 from '../components/kronologi/Sejarah3'

function Kronologi() {
  const navigate = useNavigate()
  const [sejarah,setsejarah]=useState(false)
  const [sejarah3,setsejarah3]=useState(false)
  const [sejarah2,setsejarah2]=useState(false)
  const [referensi,setreferensi]=useState(false)
  const handleSejarah=()=> setsejarah(!sejarah)
  const handleSejarah2=()=> setsejarah2(!sejarah2)
  const handleSejarah3=()=> setsejarah3(!sejarah3)
  const handleReferensi=()=> setreferensi(!referensi)
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col lg:w-auto lg:px-10 w-80 h-auto py-8 rounded-lg bg-transparent backdrop-blur-md justify-center items-center space-y-2'>
        <div className='w-full flex px-3 justify-between'>
          <div className='font-semibold text-white text-xl px-2 rounded-md flex space-x-1 cursor-pointer' onClick={()=> navigate('/')}>
            <div className='flex justify-center items-center px-3 py-1 lg:py-0 lg:px-2 rounded-full bg-[#FF8C34]'><FontAwesomeIcon icon={faAngleLeft} size={'lg'} /> </div>
          </div>
          <div className='font-semibold text-white lg:text-xl text-sm bg-[#FF8C34] px-2 flex justify-center items-center rounded-md'>Section 2: Kronologi</div>
        </div>
        <div className='flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4'>
        <div className='cursor-pointer active:animate-ping' onClick={handleSejarah}>
          <div className='w-60 h-32'>
            <img src={War3} className='w-full h-full rounded-sm'/>
          </div>
          <div className='bg-white text-orange-500 py-1 px-2 text-center w-60 h-auto rounded-sm font-semibold'>Garis Besar Perkembangan Singhasari</div>
        </div>
        <div className='cursor-pointer active:animate-ping' onClick={handleSejarah2}>
          <div className='bg-gray-600 rounded-sm w-60 h-32 justify-center flex items-center'>
            <img src={War2} className='w-full h-full'/>
          </div>
          <div className='bg-white text-orange-500 py-1 px-2 w-60 h-auto text-center rounded-sm font-semibold'>Puncak Kejayaan Singhasari</div>
        </div>
        <div className='cursor-pointer active:animate-ping' onClick={handleSejarah3}>
          <div className='bg-gray-600 rounded-sm w-60 h-32 justify-center flex items-center'>
            <img src={War} className='w-full h-full'/>
          </div>
          <div className='bg-white text-orange-500 py-1 px-2 w-60 h-auto text-center rounded-sm font-semibold'>Keruntuhan Singhasari</div>
        </div>
        <div className='cursor-pointer active:animate-ping' onClick={handleReferensi}>
          <div className='bg-gray-600 rounded-sm w-60 h-32 justify-center flex items-center'>
            <img src={Books} className='w-full h-full'/>
          </div>
          <div className='bg-white text-orange-500 py-1 px-2 w-60 h-auto text-center rounded-sm font-semibold'>Referensi</div>
        </div>
        </div>
      </div>
      {sejarah&&<Sejarah show={sejarah} handleSejarah={handleSejarah}/>}
      {sejarah2&&<Sejarah2 show={sejarah2} handleSejarah2={handleSejarah2} />}
      {sejarah3&&<Sejarah3 show={sejarah3} handleSejarah3={handleSejarah3} />}
      {referensi&&<Referensi show={referensi} handleReferensi={handleReferensi} />}
    </div>
  )
}

export default Kronologi