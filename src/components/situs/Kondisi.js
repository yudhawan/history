import React from 'react'
import {kondisi} from './text'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
function Kondisi() {
  const [selected,setselected] = React.useState('')
  const knds = ["Candi Singosari","Arca Dwarapala","Candi Sumberawan"]
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center'>
      {
        knds.map((item,index)=>{
          return(
            <div className='flex-1 p-2 cursor-pointer select-none' key={index} onClick={()=>setselected(item)} >
              <div className='flex flex-col'>
                <div className='flex w-48 h-40'>
                  <img src={kondisi[index]['images'][0]['url']} className="w-full h-full" />
                </div>
                <div className='flex text-center justify-center items-center bg-orange-500 rounded-sm'>
                  <div className='text-lg font-semibold text-white'>{item}</div>
                </div>
              </div>
            </div>
          )
        })
      }
      <div className={`${selected?'block fixed':'hidden'} top-0 self-center flex justify-center bg-transparent backdrop-blur-sm  w-full h-full lg:bg-opacity-70 bg-opacity-80 bg-black`}>
        <div className='bg-gray-500 bg-opacity-20 rounded-md w-[90vw] h-[100vh] lg:h-[80vh] '>
        <div className='bg-gray-400 rounded-full w-8 h-8 justify-center float-right items-center flex hover:animate-spin cursor-pointer  text-rose-700' onClick={()=>setselected('')}><FontAwesomeIcon icon={faXmark} size={'lg'} /></div>
            <div className='text-justify font-Ubuntu overflow-auto p-4 space-y-2 w-full h-full text-white '>
                {
                    kondisi.filter(val=> val.title===selected).map((val,index)=>{
                        return (
                            <>
                                <p key={index} className='text-xl font-bold text-center'>{val.title}</p>
                                <p>{val.description}</p>
                                <div className='flex flex-wrap justify-center'>
                                {val.images&&val.images.map((img,index)=>(
                                    <div key={index} className='w-72 h-64 lg:float-none mx-1 my-1 lg:mx-2 lg:my-2 rounded-md relative'>
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

export default Kondisi