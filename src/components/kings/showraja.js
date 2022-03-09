import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {teori} from './text'
function Showraja({raja, handleRaja}) {
  return (
    <div className={`${raja?'block fixed':'hidden'} top-0 self-center flex justify-center bg-transparent backdrop-blur-sm items-center w-full h-full lg:bg-opacity-70 bg-opacity-80 bg-black`}>
        <div className='bg-gray-400 rounded-full z-10 w-8 h-8 justify-center items-center flex hover:animate-spin absolute cursor-pointer -mt-[79vh] -mr-[88vw] lg:-mr-[90vw] text-rose-700' onClick={handleRaja}><FontAwesomeIcon icon={faXmark} size={'lg'} /></div>
        <div className='bg-white rounded-md w-[90vw] h-[80vh] '>
            <div className='text-justify lg:font-Roboto overflow-auto p-4 space-y-2 w-full h-full '>
                {
                    teori.filter(val=> val.title===raja).map((val,index)=>{
                        return (
                            <>
                                <p key={index} className='text-xl font-bold text-center'>{val.title}</p>
                                {val.image&&val.image.map((img,index)=>(
                                    <div key={index} className='w-72 h-64 lg:float-right ml-2 rounded-md relative'>
                                        <img className={`w-72 h-64 rounded-md`} src={img.url} />
                                        <div className='text-sm font-semibold absolute top-1 text-center rounded-full bg-white px-1'>{img.name}</div>
                                    </div>
                                ))}
                                <p>{val.content}</p>
                            </>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Showraja