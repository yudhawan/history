import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark,faCheck} from '@fortawesome/free-solid-svg-icons'
function Referensi({show,handleReferensi}) {
  return (
    <div className={`${show?'block fixed':'hidden'} top-0 self-center flex justify-center bg-transparent backdrop-blur-sm items-center w-full h-full lg:bg-opacity-70 bg-opacity-80 bg-black`}>
      <div className='bg-gray-500 bg-opacity-20 rounded-md w-[90vw] h-auto sm:h-[70vh] lg:h-[50vh] '>
        <div className='bg-gray-400 rounded-full w-8 h-8 justify-center float-right items-center flex hover:animate-spin cursor-pointer  text-rose-700' onClick={handleReferensi}><FontAwesomeIcon icon={faXmark} size={'lg'} /></div>
        <div className='text-justify font-Ubuntu text-white overflow-auto p-4 space-y-2 w-full h-full '>
          <div className='flex text-left space-x-2 border border-gray-300 rounded-sm p-1'>
            <div className='flex justify-center items-center text-white'><FontAwesomeIcon icon={faCheck} /></div>
            <div className='flex'>
              <p>Muljana, S. (2005).
              <p className='italic'>Menuju Puncak Kemegahan; Sejarah Kerajaan Majapahit.</p>
              LKIS PELANGI AKSARA.</p>
            </div>
          </div>
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
              <p>Saptono Soemarsono. 2021. JELAJAH 349: Babad Singasari  Sejarah Kerajaan Singasari dari Awal Berdiri hingga Keruntuhannya [Video]. YouTube. https://youtu.be/USGIbaNKqQo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Referensi