import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
function Video({show,handleVideo}) {
  return (
    <div className={`${show?'block fixed':'hidden'} top-0 self-center flex justify-center bg-transparent backdrop-blur-sm items-center w-full h-full lg:bg-opacity-70 bg-opacity-80 bg-black`}>
      <div className='bg-gray-400 rounded-full z-10 w-8 h-8 justify-center items-center flex hover:animate-spin absolute cursor-pointer -mt-[30vh] sm:-mt-[70vh] lg:-mt-[90vh] -mr-[88vw] lg:-mr-[90vw] text-rose-700' onClick={handleVideo}><FontAwesomeIcon icon={faXmark} size={'lg'} /></div>
      <div className='bg-white rounded-md w-[90vw] h-[30vh] sm:h-[70vh] lg:h-[90vh] '>
        <div className='text-justify lg:font-Roboto overflow-auto p-4 space-y-2 w-full h-full'>
          <iframe src='https://www.youtube.com/embed/RmHh3a9RnxQ' className='w-full h-full' frameBorder="0" allow="accelerometer; clipboard-write;encrypted-media; gyroscope; picture-in-picture"  allowFullScreen />
        </div>
      </div>
    </div>
  )
}

export default Video