import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {teori} from './text'
function Showraja({raja, handleRaja}) {
  return (
    <div className={`${raja?'block fixed':'hidden'} top-0 self-center flex justify-center bg-transparent backdrop-blur-sm items-center w-full h-full lg:bg-opacity-70 bg-opacity-80 bg-black`}>
        <div className='bg-gray-500 bg-opacity-20 rounded-md w-[90vw] h-[80vh] '>
            <div className='bg-gray-400 rounded-full w-8 h-8 justify-center float-right items-center flex hover:animate-spin cursor-pointer  text-rose-700' onClick={handleRaja}><FontAwesomeIcon icon={faXmark} size={'lg'} /></div>
            <div className='text-justify font-Ubuntu overflow-auto p-4 space-y-2 w-full h-[75vh] '>
                {
                    teori.filter(val=> val.title===raja).map((val,index)=>{
                        return (
                            <>
                                <p key={index} className='text-xl font-bold text-center text-white'>{val.title}</p>
                                <div className="text-white" dangerouslySetInnerHTML={{__html: val.content}}></div>
                                <div className='flex w-full flex-col lg:flex-row justify-center'>
                                {val.image&&val.image.map((img,index)=>(
                                    <div key={index} className='w-72 h-64 my-1 self-center ml-2 rounded-md relative'>
                                        <img className={`w-72 h-64 rounded-md`} src={img.url} />
                                        <div className='text-sm font-semibold absolute top-1 text-center rounded-full bg-white px-1'>{img.name}</div>
                                    </div>
                                ))}
                                </div>
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