import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import Candi from '../components/situs/Candi'
import Kondisi from '../components/situs/Kondisi'
import Referensi from '../components/situs/Referensi'
import Books from '../books.png'
function Situs() {
  const navigate = useNavigate()
  const [situs,setsitus] = useState(false)
  const [kondisi, setkondisi] = useState(false)
  const [referensi, setreferensi] = useState(false)
  const handleSitus = () => setsitus(!situs)
  const handleKondisi = () => setkondisi(!kondisi)
  const handleReferensi=()=> setreferensi(!referensi)
  return (
    <div className='flex justify-center items-center'>
      {
        referensi?<>
        {referensi&&<Referensi show={referensi} handleReferensi={handleReferensi} />}
        </>:
      
      <div className='flex flex-col lg:w-auto lg:px-10 w-80 h-auto py-8 rounded-lg bg-transparent backdrop-blur-md justify-center items-center space-y-2'>
        <div className={`${(situs | kondisi)?'hidden':'block'} w-full flex px-3 justify-between`}>
          <div className='relative self-start px-3 py-1 lg:py-1 lg:px-1 rounded-full bg-[#B48E00] order-first text-white cursor-pointer' onClick={()=> navigate('/')}>
            <div className='flex justify-center items-center px-3 py-1 lg:py-0 lg:px-2 rounded-full bg-[#B48E00]'><FontAwesomeIcon icon={faAngleLeft} size={'lg'} /> </div>
          </div>
          <div className='font-semibold text-white text-xl bg-[#B48E00] px-2 rounded-md'>Section 5: Situs</div>
        </div>
        <div className={`${(situs | kondisi)?'block':'hidden'} relative self-start px-3 py-1 lg:py-1 lg:px-3 rounded-full bg-[#B48E00] order-first text-white cursor-pointer`} onClick={()=> {
          setsitus(false)
          setkondisi(false)
        }}><FontAwesomeIcon icon={faAngleLeft} size={'lg'} /> </div>
        <div className={`w-full flex space-y-4 lg:space-y-0 lg:space-x-6 flex-col lg:flex-row p-6 bg-slate-200 rounded-md `}>
          {situs?<Candi situs={situs} handleSitus={handleSitus} />:kondisi?<Kondisi kondisi={kondisi} handleKondisi={handleKondisi} />:<><div className='cursor-pointer active:animate-ping flex flex-col justify-center items-center' onClick={handleSitus}>
            <div className='w-60 h-32'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa0v89mEk8DgtJcWBP4h_Fz2zXEBwGMgkVsw&usqp=CAU" className='w-full h-full rounded-sm'/>
            </div>
              <div className='bg-[#B48E00] text-white py-1 px-2 text-center w-60 h-auto rounded-sm font-semibold text-sm'>Situs Peninggalan Kerajaan Singhasari di Malang</div>
          </div>
          <div className='cursor-pointer active:animate-ping flex flex-col justify-center items-center' onClick={handleKondisi}>
            <div className='w-60 h-32'>
              <img src="https://www.pngkey.com/png/detail/191-1919505_asian-temple-royalty-free-vector-clip-art-illustration.png" className='w-full h-full rounded-sm'/>
            </div>
            <div className='bg-[#B48E00] text-white py-1 px-2 text-center w-60 rounded-sm font-semibold '>Kondisi Kekinian Situs </div>
          </div>
          <div className='cursor-pointer active:animate-ping flex flex-col justify-center items-center' onClick={handleReferensi}>
            <div className='bg-gray-600 rounded-sm w-60 h-32 justify-center flex items-center'>
              <img src={Books} className='w-full h-full'/>
            </div>
            <div className='bg-[#B48E00] text-white py-1 px-2 text-center rounded-sm font-semibold w-60'>Referensi</div>
          </div>
          </>
          }
        </div>
      </div>
      }
    </div>
  )
}

export default Situs