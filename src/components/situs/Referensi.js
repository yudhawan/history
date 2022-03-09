import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark,faCheck} from '@fortawesome/free-solid-svg-icons'
function Referensi({show,handleReferensi}) {
  return (
    <div className={`${show?'block fixed':'hidden'} top-0 self-center flex justify-center bg-transparent backdrop-blur-sm items-center w-full h-full lg:bg-opacity-70 bg-opacity-80 bg-black`}>
      <div className='bg-gray-400 rounded-full w-8 h-8 justify-center items-center flex hover:animate-spin absolute cursor-pointer lg:-right-5 lg:-top-5 xl:-right-5 -right-5 -top-5 xl:-top-5 text-rose-700' onClick={handleReferensi}><FontAwesomeIcon icon={faXmark} size={'lg'} /></div>
      <div className='bg-white rounded-md w-[90vw] h-[80vh] sm:h-[70vh] lg:h-[50vh] '>
        <div className='text-justify lg:font-Roboto overflow-auto p-4 space-y-2 w-full h-full '>
          <div className='flex text-left space-x-2 border border-gray-300 rounded-sm p-1'>
            <div className='flex justify-center items-center text-green-600'><FontAwesomeIcon icon={faCheck} /></div>
            <div className='flex'>
              <p clasName="flex">Mulyadi, L., Hutabarat, J., & Harisman, A. (2015). <p className='italic'>Relief dan Arca Candi Singosari-Jawi.</p> CV. Dream Litera Buana.</p>
            </div>
          </div>
          <div className='flex text-left space-x-2 border border-gray-300 rounded-sm p-1'>
            <div className='flex justify-center items-center text-green-600'><FontAwesomeIcon icon={faCheck} /></div>
            <div className='flex'>
              <p clasName="flex">Hardjowadojo, Pitono. (1965). Kitab Pararaton Terjemahan.</p>
            </div>
          </div>
          <div className='flex text-left space-x-2 border border-gray-300 rounded-sm p-1'>
            <div className='flex justify-center items-center text-green-600'><FontAwesomeIcon icon={faCheck} /></div>
            <div className='flex'>
              <p clasName="flex">Poesponegoro, M. D., & Notosusanto, N. (1984). Sejarah Nasional Indonesia, Jilid 2. <p className='italic'>Jakarta: Balai Pustaka Dan Kemendikbud RI [Kementerian Pendidikan Dan Kebudayaan Republik Indonesia].</p></p>
            </div>
          </div>
          <div className='flex text-left space-x-2 border border-gray-300 rounded-sm p-1'>
            <div className='flex justify-center items-center text-green-600'><FontAwesomeIcon icon={faCheck} /></div>
            <div className='flex'>
              <p clasName="flex">Setiawan, H., & Setiawati, D. (2019). Situs Candi Jago Sebagai Sumber Pembelajaran Sejarah Di Kota Malang. <p className='italic'>E-Jurnal Mitra Pendidikan,</p> 3(1), 142–151.</p>
            </div>
          </div>
          <div className='flex text-left space-x-2 border border-gray-300 rounded-sm p-1'>
            <div className='flex justify-center items-center text-green-600'><FontAwesomeIcon icon={faCheck} /></div>
            <div className='flex'>
              <p clasName="flex">Sudikno, A., & Surjono, S. (2017). Intangible Cultural Heritage Candi Sumberawan Dalam Perspekstif Kosmologi. <p className='italic'>Prosiding Seminar Heritage IPLBI,</p> 1.</p>
            </div>
          </div>
          <div className='flex text-left space-x-2 border border-gray-300 rounded-sm p-1'>
            <div className='flex justify-center items-center text-green-600'><FontAwesomeIcon icon={faCheck} /></div>
            <div className='flex'>
              <p clasName="flex">Sudikno, A., & Surjono, S. (2017). Intangible Cultural Heritage Candi Sumberawan Dalam Perspekstif Kosmologi. <p className='italic'>Prosiding Seminar Heritage IPLBI,</p> 1.</p>
            </div>
          </div>
          <div className='flex text-left space-x-2 border border-gray-300 rounded-sm p-1'>
            <div className='flex justify-center items-center text-green-600'><FontAwesomeIcon icon={faCheck} /></div>
            <div className='flex'>
              <p clasName="flex">Turaeni, N. N. T. (2015). Aplikasi Adi Parwa dalam Relief Situs Candi Kidal. <p className='italic'>Forum Arkeologi,</p> 28(2), 131–144.</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Referensi