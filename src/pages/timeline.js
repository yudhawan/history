import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import tlnagara from '../tlnagara.png'
import tlpararaton from '../tlpararaton.png'
function Timeline() {
  const [nagara,setnagara] = React.useState(false)
  const [pararaton,setpararaton] = React.useState(false)
  const navigate = useNavigate()
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col lg:w-[90vw] lg:px-10 w-96 h-auto py-8 rounded-lg bg-transparent backdrop-blur-md justify-center items-center space-y-2'>
        <div className={` w-full flex px-3 justify-between`}>
          <div className='relative self-start px-3 py-1 lg:py-1 lg:px-1 rounded-full bg-[#845792] order-first text-white cursor-pointer' onClick={()=> navigate('/')}>
            <div className='flex justify-center items-center px-3 py-1 lg:py-0 lg:px-2 rounded-full bg-[#845792]'><FontAwesomeIcon icon={faAngleLeft} size={'lg'} /> </div>
          </div>
          <div className='font-semibold text-white text-xl bg-[#845792] px-2 rounded-md'>Section 3: Lini Masa</div>
        </div>
        <div className={`flex justify-center items-center lg:w-full`}>
          <div className='flex space-x-5 '>
            <div className='hover:opacity-75 cursor-pointer select-none flex-col' onClick={()=>{
              if(pararaton) setpararaton(false)
              setnagara(!nagara)
              }}>
              <div className=' w-40 h-20 lg:w-80 lg:h-40 border-t border-l border-r border-orange-900'><img src={tlnagara} className="w-full h-full " /></div>
              <div className='text-sm lg:text-lg text-white bg-[#845792] rounded-sm text-center border border-orange-900'>Lini Masa Nagara</div>
            </div>
            <div className='hover:opacity-75 cursor-pointer select-none flex-col' onClick={()=>{
              if(nagara) setnagara(false)
              setpararaton(!pararaton)
              }}>
              <div className=' w-40 h-20 lg:w-80 lg:h-40 border-t border-l border-r border-orange-900'><img src={tlpararaton} className="w-full h-full " /></div>
              <div className='text-sm lg:text-lg text-white bg-[#845792] rounded-sm text-center border border-orange-900'>Lini Masa Pararaton</div>
            </div>
          </div>
        </div>
        {(nagara | pararaton)?<img src={nagara?tlnagara:tlpararaton} className="w-full h-full" />:<></>}
        <div className={`flex-col rounded-md lg:w-full bg-gray-500 bg-opacity-20`}>
          <article className='overflow-y-auto w-96 lg:w-full h-80 flex-col flex p-2 text-white'>
            <p>Riwayat kesejarahan Kerajaan Singhasari pada Kitab Nagarakrtagama dan Kitab Pararaton memiliki beberapa perbedaan. Beberapa poin yang bisa dicermati diantaranya adalah sebagai berikut:</p>
            <br></br>
            <p>1.	Kitab Pararaton menjabarkan sosok Ken Angrok sebagai seorang yang bersikap buruk dan sering melakukan berbagai macam kejahatan sebelum menjadi pendiri Kerajaan Singhasari. Sementara dalam Kitab Nagarakrtagama, dijelaskan bahwa Ken Angrok (dengan nama Sri Ranggah Rajasa) merupakan sosok pahlawan bijak yang disegani setiap orang dan pelindung tanah Jawa.</p><br></br>
            <p>2.	Beberapa peristiwa penting dalam Kerajaan Singhasari memiliki penanggalan tahun yang berbeda dalam Kitab Pararaton dan Kitab Nagarakrtagama.</p><br></br>
            <p>3.	Dalam Kitab Pararaton, Anusapati disebutkan menjadi raja dalam waktu singkat yakni hanya satu tahun. Sementara itu dalam Kitab Nagarakrtagama, Anusapati dijabarkan menjadi raja selama dua puluh satu tahun.</p><br></br>
            <p>4.	Kitab Nagarakrtagama tidak menyebutkan nama raja-raja dengan nama asli, namun hanya menggunakan nama Abhiseka, sementara pada Kitab Pararaton disebutkan nama aslinya.</p>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Timeline