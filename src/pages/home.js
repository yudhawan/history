import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import {faLandmark, faList, faTimeline, faCrown, faSynagogue, faGamepad, faCircleInfo} from '@fortawesome/free-solid-svg-icons'
function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <div className={`flex flex-col items-center justify-center lg:justify-start lg:items-start`} >
        <div className='font-semibold text-xl lg:text-3xl text-white underline decoration-sky lg:ml-24 bg-transparent backdrop-blur-sm font-Roboto-400'>WELCOME TO GASING</div>
        <div className='flex flex-wrap justify-center w-screen lg:justify-start lg:w-2/5 lg:ml-20 mt-10'>
          <div className='cursor-pointer transition duration-300 ease-out hover:-translate-y-1 hover:scale-110 text-xl mx-2 my-2 w-32 text-center bg-transparent backdrop-blur-md lg:backdrop-blur-sm border-2 rounded-lg border-indigo-400 lg:rounded-none lg:rounded-tl-xl p-4 items-center' onClick={()=>navigate('/sejarah')}>
            <div className='text-[#C9952D]'><FontAwesomeIcon icon={faLandmark}/></div>
            <div className='text-white'>Sejarah</div>
          </div>
          <div className='cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-xl items-center mx-2 my-2 w-32 text-center bg-transparent backdrop-blur-md lg:backdrop-blur-sm border-2 rounded-lg border-indigo-400 lg:rounded-none p-4' onClick={()=>navigate('/kronologi')}>
            <div className='text-[#9A9424]'><FontAwesomeIcon icon={faTimeline}/></div>
            <div className='text-white'>Kronologi</div>
          </div>
          <div className='cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-xl items-center mx-2 my-2 w-32 text-center bg-transparent backdrop-blur-md lg:backdrop-blur-sm border-2 rounded-lg border-indigo-400 lg:rounded-none lg:rounded-tr-xl p-4' onClick={()=>navigate('/linimasa')}>
            <div className='text-[#6B8F2E]'><FontAwesomeIcon icon={faList}/></div>
            <div className='text-white'>Linimasa</div>
          </div>
          <div className='cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-xl items-center mx-2 my-2 w-32 text-center bg-transparent backdrop-blur-md lg:backdrop-blur-sm border-2 rounded-lg border-indigo-400 lg:rounded-none lg:rounded-bl-xl p-4' onClick={()=>navigate('/raja')}>
            <div className='text-[#38873F]'><FontAwesomeIcon icon={faCrown}/></div>
            <div className='text-white'>Raja-raja</div>
          </div>
          <div className='cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-xl items-center mx-2 my-2 w-32 text-center bg-transparent backdrop-blur-md lg:backdrop-blur-sm border-2 rounded-lg border-indigo-400 lg:rounded-none p-4' onClick={()=>navigate('/situs')}>
            <div className='text-[#007C51]'><FontAwesomeIcon icon={faSynagogue}/></div>
            <div className='text-white'>Situs</div>
          </div>
          <div className='cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-xl items-center mx-2 my-2 w-32 text-center bg-transparent backdrop-blur-md lg:backdrop-blur-sm border-2 rounded-lg border-indigo-400 lg:rounded-none lg:rounded-br-xl p-4' onClick={()=>navigate('/quis')}>
            <div className='text-[#006F61]'><FontAwesomeIcon icon={faGamepad}/></div>
            <div className='text-white'>Quiz</div>
          </div>
          <div className='cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-xl items-center mx-2 my-2 w-32 lg:w-3/4 lg:rounded-none text-center backdrop-blur-md lg:backdrop-blur-sm border-2 rounded-lg border-indigo-400  lg:flex space-x-2 justify-center p-4' onClick={()=>navigate('/about')}>
            <div className='text-[#826639]'><FontAwesomeIcon icon={faCircleInfo}/></div>
            <div className='text-white'>About</div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home