import React, { useRef, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft,faListCheck} from '@fortawesome/free-solid-svg-icons'
import {question} from '../components/question'
import {useNavigate} from 'react-router-dom'
function Quiz() {
  const navigate = useNavigate()
  const [info,setinfo] = useState({
    nama:'',
    email:'',
  })
  const [nilai,setnilai] = useState(0)
  const radio = useRef(null)
  const [valid,setvalid] = useState('')
  const [show,setshow] = useState(false)
  const [showinfo,setshowinfo] = useState(false)
  function handleMasuk(){
    if(info.nama==='' || info.nama===null) return setvalid('Nama tidak boleh kosong')
    if(info.email==='' || info.email===null) return setvalid('Email tidak boleh kosong')
    setvalid('')
    setshow(!show)
    setshowinfo(!showinfo)
  }
  function handleSubmit(){
    let total = question.filter(val => val.correct===true).length
    console.log(total)
    setnilai(total)
    setshow(!show)
  }
  return (
    <div className='flex justify-center items-center'>
      <div className={`flex flex-col lg:w-auto lg:px-10 w-80 h-auto py-8 rounded-lg bg-transparent backdrop-blur-md justify-center items-center space-y-2`}>
        {/* info */}
        <div className={`${show?'hidden':'block'} w-full flex p-4 lg:space-x-4 flex-col lg:flex-row px-3 bg-slate-200`}>
          <div className='lg:w-[25vw] lg:h-[32vh] border-2 border-orange-400 rounded-tl-3xl rounded-br-3xl'><img src="https://iup-ugm.com/wp-content/uploads/2018/11/Focus-Group-Discussion-1.png" className='h-full w-full rounded-tl-3xl rounded-br-3xl' /></div>
          <div className='flex flex-col space-y-3'>
            
            {
              showinfo?<>
              <div className='text-base flex-col'>
                <div className='text-lg font-semibold text-orange-900'>{info.nama}</div>
                <div className='text-lg font-semibold text-orange-900'>{info.email}</div>
              </div>
              <div className='flex'>
                <div className='text-2xl text-orange-500 font-semibold'>Nilai Anda : </div>
                <div className='text-3xl font-semibold text-bold text-orange-700'>{nilai&&nilai*10}</div>
              </div>
              <div className='flex space-x-1'>
                <button className='px-3 py-1 rounded-md text-white font-semibold bg-rose-700' onClick={()=> navigate('/')}>Keluar</button>
              </div>
              
            </>:
              <>
              <div className='flex justify-between mt-4 lg:mt-0'>
                <div className='text-3xl underline underline-offset-4 text-[#47557E] font-semibold '>Quiz</div>
                <div className='flex justify-center items-center px-3 py-1 lg:py-0 lg:px-3 rounded-full bg-[#47557E] order-first text-white cursor-pointer' onClick={()=> navigate('/')}><FontAwesomeIcon icon={faAngleLeft} size={'lg'} /> </div>
                <div className='flex justify-center items-center px-3 py-1 lg:py-0 lg:px-3 rounded-md bg-[#47557E] order-last text-white'><FontAwesomeIcon icon={faListCheck} /></div>
              </div>
              <div className='mt-5 font-Roboto font-semibold'>Mari Melatih Pengetahuan Kalian Tentang Kerajaan Singhasari</div>
              <div className='flex-col space-y-1'>
                <div className='p-2 rounded-md bg-white'><input type="text" className='outline-none w-full' value={info.nama} onChange={(e)=>setinfo({...info, nama:e.target.value})} placeholder="Nama" /></div>
                <div className='p-2 rounded-md bg-white'><input type="email" className='outline-none w-full' value={info.email} onChange={(e)=>setinfo({...info, email:e.target.value})} placeholder="Email" /></div>
              </div>
              {valid&&<div className='text-center text-rose-600 font-semibold'>{valid}</div>}
              <button className='bg-green-500 px-4 py-1 rounded-md mt-2 text-white font-semibold' onClick={handleMasuk}>Masuk</button>
              </>
            }
          </div>
        </div>
        {/* quis */}
        <div className={`${show?'block':'hidden'}`}>
          <div className={`w-full ${show?'h-[70vh] overflow-y-auto':'h-auto'} flex p-4 flex-col px-3 space-y-10 bg-slate-200`}>
          <div className='flex fixed justify-between w-[80vw] sm:w-[75vw]  h-[10vh] lg:w-[85vw] xl:w-[85vw] px-10 bg-transparent backdrop-blur-md'>
              <div className='text-gray-500 font-semibold'>Jumlah Soal {question&&question.length}</div>
              <div className='text-gray-500 font-semibold'>Selamat Mengerjakan</div>
              <button onClick={handleSubmit} className="bg-green-600 rounded-md px-2 h-8 lg:py-1 text-white font-medium">Submit</button>
          </div>
          <div className={`w-full ${show?'h-[70vh] overflow-y-auto':'h-auto'} flex p-4 flex-col px-3 space-y-10 bg-slate-200`}>
            {
              question&&question.map((item,index)=>{
                return <div key={index} className='flex-col mx-2 my-2 '>
                  <div className='text-lg text-black font-semibold'>{index+1}. {item.question}</div>
                  <div className='flex flex-col space-y-1'>
                    {
                      item.options.map((i,indx)=>{
                        return <div key={indx} className='flex p-1 w-[70vw] items-center justify-start rounded-md bg-white'>
                          <input ref={radio} type="radio" name={index} className='outline-none w-[5vw]' value={i} onChange={(e)=> {
                            question.filter(val=> val.id===(index+1)).map(value=>{
                              if(value.answer===e.target.value){
                                value.correct=true
                              }else{
                                value.correct=false
                              }
                            })
                          }
                          } />
                          <p>{i}</p>
                        </div>
                      })
                    }
                  </div>
                </div>
              })
            }
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Quiz