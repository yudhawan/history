import React from 'react'
import {statues} from './text'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
function Candi({selected, handleselected}) {
  // const [selected,setselected] = React.useState('')
  const candi = ["Candi Kidal","Candi Jago","Candi Singosari","Arca Dwarapala","Candi Sumberawan"]
  return (
    <div className='flex  flex-wrap  lg:flex-row justify-center items-center '>
      {
        selected?<></>:
        candi.map((item,index)=>{
          return(
            <div className='flex  lg:p-2 cursor-pointer mx-1 my-1 select-none' key={index} onClick={()=>handleselected(item)} >
              <div className='flex flex-col justify-center items-center'>
                <div className='flex w-28 h-24 lg:w-48 lg:h-40'>
                  <img src={statues[index]['images'][0]['url']} className="w-full h-full" />
                </div>
                <div className='flex text-center justify-center items-center bg-[#B48E00] rounded-sm w-28 lg:w-full'>
                  <div className='text-sm lg:text-lg font-semibold text-white'>{item}</div>
                </div>
              </div>
            </div>
          )
        })
      }
      
      <div className={`${selected?'block fixed':'hidden'} top-20 self-center flex justify-center bg-transparent backdrop-blur-sm  w-90[vw] h-full lg:bg-opacity-70 bg-opacity-60 bg-black`}>
        <div className='bg-gray-500 bg-opacity-20 rounded-md w-[90vw] h-[80vh] lg:h-[80vh] '>
        <div className='bg-gray-400 rounded-full w-8 h-8 justify-center float-right items-center flex hover:animate-spin cursor-pointer  text-rose-700' onClick={()=>handleselected('')}><FontAwesomeIcon icon={faXmark} size={'lg'} /></div>
            <div className='text-justify font-Ubuntu overflow-auto p-4 space-y-2 w-full h-[70vh] text-white'>
                {
                    statues.filter(val=> val.title===selected).map((val,index)=>{
                        return (
                            <>
                                <p key={index} className='text-xl font-bold text-center'>{val.title}</p>
                                <p>{val.description}</p>
                                <div className='flex w-full flex-col lg:flex-row lg:justify-center'>
                                {val.images&&val.images.map((img,index)=>(
                                    <div key={index} className='w-72 h-64 my-1 ml-2 rounded-md relative'>
                                        <img className={`w-72 h-64 rounded-md`} src={img.url} />
                                        <div className='text-sm text-black font-semibold absolute top-1 text-center rounded-full bg-white px-1'>{img.name}</div>
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
    </div>
    
  )
}

export default Candi