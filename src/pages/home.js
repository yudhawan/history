import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import {faLandmark, faList, faTimeline, faCrown, faSynagogue, faGamepad, faCircleInfo} from '@fortawesome/free-solid-svg-icons'
function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <div className={`flex flex-col items-center justify-center lg:justify-start lg:items-start `} >
        
        <div className='items-center space-x-2 font-semibold flex justify-between text-xl lg:text-2xl text-[#DFE0DF] lg:ml-32  font-Ubuntu'>
          <div className='bg-[#EE8614] order-1 rounded-full w-6 h-6 '></div>
          <div className='bg-[#EE8614] order-2 rounded-full w-8 h-8 '></div>
          <div className='border-4 border-[#EE8614] order-3 px-2 py-3'>WELCOME TO GASING</div>
          <div className='bg-[#EE8614] order-4 rounded-full w-8 h-8 '></div>
          <div className='bg-[#EE8614] order-5 rounded-full w-6 h-6 '></div>
        </div>
        <div className='bg-[#2F4858] rounded-sm flex flex-wrap justify-center w-[90vw] lg:justify-center lg:w-[35%] lg:ml-20 mt-10'>
          <div className='cursor-pointer transition duration-300 ease-out hover:-translate-y-1 hover:scale-110 text-xl mx-2 my-2 w-32 text-center bg-[#EE5D5A] rounded-lg p-4 items-center' onClick={()=>navigate('/sejarah')}>
            <div className='text-white'><FontAwesomeIcon icon={faLandmark}/></div>
            <div className='text-white'>Sejarah</div>
          </div>
          <div className='cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-xl items-center mx-2 my-2 w-32 text-center rounded-lg bg-[#C55284] p-4' onClick={()=>navigate('/kronologi')}>
            <div className='text-white'><FontAwesomeIcon icon={faTimeline}/></div>
            <div className='text-white'>Kronologi</div>
          </div>
          <div className='cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-xl items-center mx-2 my-2 w-32 text-center bg-[#845792] rounded-lg p-4' onClick={()=>navigate('/linimasa')}>
            <div className='text-white'><FontAwesomeIcon icon={faList}/></div>
            <div className='text-white'>Linimasa</div>
          </div>
          <div className='cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-xl items-center mx-2 my-2 w-32 text-center bg-[#2E8A19] rounded-lg p-4' onClick={()=>navigate('/raja')}>
            <div className='text-white'><FontAwesomeIcon icon={faCrown}/></div>
            <div className='text-white'>Raja-raja</div>
          </div>
          <div className='cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-xl items-center mx-2 my-2 w-32 text-center bg-[#B48E00] rounded-lg p-4' onClick={()=>navigate('/situs')}>
            <div className='text-white'><FontAwesomeIcon icon={faSynagogue}/></div>
            <div className='text-white'>Situs</div>
          </div>
          <div className='cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-xl items-center mx-2 my-2 w-32 text-center bg-[#47557E] rounded-lg p-4' onClick={()=>navigate('/quis')}>
            <div className='text-white'><FontAwesomeIcon icon={faGamepad}/></div>
            <div className='text-white'>Quiz</div>
          </div>
          <div className='cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-xl items-center mx-2 my-2 w-32 lg:w-3/4 text-center rounded-lg bg-[#402E32] lg:flex space-x-2 justify-center p-4' onClick={()=>navigate('/about')}>
            <div className='text-white'><FontAwesomeIcon icon={faCircleInfo}/></div>
            <div className='text-white'>About</div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home