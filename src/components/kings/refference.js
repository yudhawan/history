import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark,faCheck} from '@fortawesome/free-solid-svg-icons'
function Referensi({show,handleReferensi}) {
  return (
    <div className={`${show?'block fixed':'hidden'} top-0 self-center flex justify-center bg-transparent backdrop-blur-sm items-center w-full h-full lg:bg-opacity-70 bg-opacity-80 bg-black`}>
      <div className='bg-gray-500 bg-opacity-20 rounded-md w-[90vw] h-[50vh] sm:h-[70vh] lg:h-[50vh] '>
        <div className='bg-gray-400 rounded-full w-8 h-8 justify-center float-right items-center flex hover:animate-spin cursor-pointer  text-rose-700' onClick={handleReferensi}><FontAwesomeIcon icon={faXmark} size={'lg'} /></div>
        <div className='text-justify font-Ubuntu overflow-auto p-4 space-y-2 w-full h-[45vh] text-white'>
          <div className='flex text-left space-x-2 border border-gray-300 rounded-sm p-1'>
            <div className='flex justify-center items-center text-white'><FontAwesomeIcon icon={faCheck} /></div>
            <div className='flex'>
              <p>Poesponegoro, M. D., & Notosusanto, N. (1984). Sejarah Nasional Indonesia, Jilid 2.
              <p className='italic'>Jakarta: Balai Pustaka Dan Kemendikbud RI [Kementerian Pendidikan Dan Kebudayaan Republik Indonesia].</p></p>
            </div>
          </div>
          <div className='flex text-left space-x-2 border border-gray-300 rounded-sm p-1'>
            <div className='flex justify-center items-center text-white'><FontAwesomeIcon icon={faCheck} /></div>
            <div className='flex'>
              <p>Turaeni, N. N. T. (2015). Aplikasi Adi Parwa dalam Relief Situs Candi Kidal.
              <p className='italic'>Forum Arkeologi, 28(2),</p>
              131–144.</p>
            </div>
          </div>
          <div className='flex text-left space-x-2 border border-gray-300 rounded-sm p-1'>
            <div className='flex justify-center items-center text-white'><FontAwesomeIcon icon={faCheck} /></div>
            <div className='flex'>
              <p>Hardjowadojo, Pitono. (1965). Kitab Pararaton Terjemahan.</p>
            </div>
          </div>
          <div className='flex text-left space-x-2 border border-gray-300 rounded-sm p-1'>
            <div className='flex justify-center items-center text-white'><FontAwesomeIcon icon={faCheck} /></div>
            <div className='flex'>
              <p>ASISI Channel. 2021. Revealing the Hideous Secrets of Kertanegara, Java's Conqueror King [Video] YouTube. https://youtu.be/RmHh3a9RnxQ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Referensi