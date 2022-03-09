import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import Kings from '../kings.png'
import HandTab from '../handtablet.png'
import Books from '../books.png'
import Zeusking from '../zeusking.png'
import Video from '../components/kings/video'
import Referensi from '../components/kings/refference'
import Showraja from '../components/kings/showraja'
function TheKings() {
  const navigate = useNavigate()
  const options = ['Ken Angrok','Anuspati','Wisnuwarddhana','Kertanegara']
  const [selected,setselected]=useState('')
  const [kings, setkings] = useState(false)
  const [video, setvideo] = useState(false)
  const [referensi, setreferensi] = useState(false)
  const handleRaja=()=> setselected('')
  const handleVideo=()=> setvideo(!video)
  const handleReferensi=()=> setreferensi(!referensi)
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col lg:w-auto lg:px-10 w-80 h-auto py-8 rounded-lg bg-transparent backdrop-blur-md justify-center items-center space-y-2'>
        <div className={`${kings?'hidden':'block'} w-full flex px-3 justify-between`}>
          <div className='relative self-start px-3 py-1 lg:py-1 lg:px-1 rounded-full bg-[#FF8C34] order-first text-white cursor-pointer' onClick={()=> navigate('/')}>
            <div className='flex justify-center items-center px-3 py-1 lg:py-0 lg:px-2 rounded-full bg-[#FF8C34]'><FontAwesomeIcon icon={faAngleLeft} size={'lg'} /> </div>
          </div>
          <div className='font-semibold text-white text-xl bg-[#FF8C34] px-2 rounded-md'>Section 4: Raja-raja</div>
        </div>
        <div className={`${kings?'block':'hidden'} relative self-start px-3 py-1 lg:py-1 lg:px-3 rounded-full bg-[#FF8C34] order-first text-white cursor-pointer`} onClick={()=> setkings(!kings)}><FontAwesomeIcon icon={faAngleLeft} size={'lg'} /> </div>
        <div className={`w-full flex space-y-4 lg:space-y-0 lg:space-x-6 flex-col lg:flex-row p-6 bg-slate-200 rounded-md `}>
          {kings?<>
            <div className='cursor-pointer active:animate-ping space-y-1 flex flex-col items-center justify-center' onClick={()=>setselected(options[0])}>
              <div className='w-32 h-32 bg-slate-700 rounded-full'>
                <img src={Zeusking} className='w-full h-full rounded-full'/>
              </div>
              <div className='bg-slate-700 text-white py-1 px-2 text-center rounded-sm font-semibold w-full'>Ken Angrok</div>
            </div>
            <div className='cursor-pointer active:animate-ping space-y-1 flex flex-col items-center justify-center' onClick={()=>setselected(options[1])}>
              <div className='w-32 h-32 bg-rose-700 rounded-full'>
                <img src={Zeusking} className='w-full h-full rounded-full'/>
              </div>
              <div className='bg-rose-700 text-white py-1 px-2 text-center rounded-sm font-semibold w-full'>Anusapati</div>
            </div>
            <div className='cursor-pointer active:animate-ping space-y-1 flex flex-col items-center justify-center' onClick={()=>setselected(options[2])}>
              <div className='w-32 h-32 bg-orange-700 rounded-full'>
                <img src={Zeusking} className='w-full h-full rounded-full'/>
              </div>
              <div className='bg-orange-700 text-white py-1 px-2 text-center rounded-sm font-semibold w-full'>Wisnuwarddhana</div>
            </div>
            <div className='cursor-pointer active:animate-ping space-y-1 flex flex-col items-center justify-center' onClick={()=>setselected(options[3])}>
              <div className='w-32 h-32 bg-blue-700 rounded-full'>
                <img src={Zeusking} className='w-full h-full rounded-full'/>
              </div>
              <div className='bg-blue-700 text-white py-1 px-2 text-center rounded-sm font-semibold w-full'>Kertanegara</div>
            </div>
          </>:<>
            <div className='cursor-pointer active:animate-ping flex flex-col justify-center items-center' onClick={()=> setkings(!kings)}>
              <div className='w-60 h-32'>
                <img src={Kings} className='w-full h-full rounded-sm'/>
              </div>
              <div className='bg-orange-500 text-white py-1 px-2 text-center rounded-sm font-semibold w-full'>Raja-raja</div>
            </div>
            <div className='cursor-pointer active:animate-ping flex flex-col justify-center items-center' onClick={handleVideo}>
              <div className='w-60 h-32'>
                <img src={HandTab} className='w-full h-full rounded-sm'/>
              </div>
              <div className='bg-orange-500 text-white py-1 px-2 text-center rounded-sm font-semibold w-full'>Video Pembelajaran</div>
            </div>
            <div className='cursor-pointer active:animate-ping flex flex-col justify-center items-center' onClick={handleReferensi}>
              <div className='bg-gray-600 rounded-sm w-60 h-32 justify-center flex items-center'>
                <img src={Books} className='w-full h-full'/>
              </div>
              <div className='bg-orange-500 text-white py-1 px-2 text-center rounded-sm font-semibold w-full'>Referensi</div>
            </div>
          </>}

        </div>
      </div>
      {selected&&<Showraja raja={selected} handleRaja={handleRaja} />}
      {video&&<Video show={video} handleVideo={handleVideo} />}
      {referensi&&<Referensi show={referensi} handleReferensi={handleReferensi} />}
    </div>
  )
}

export default TheKings