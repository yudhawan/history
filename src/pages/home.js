
function Home() {
  return (
    <div>
      <div className={`flex flex-col items-center justify-center lg:justify-start lg:items-start`} >
        <div className='font-semibold text-xl lg:text-3xl text-white underline decoration-sky lg:ml-24'>WELCOME TO GASING</div>
        <div className='flex flex-wrap justify-center w-full lg:justify-start lg:w-2/5 lg:ml-20 mt-10'>
          <div className='text-xl font-bold mx-2 my-2 w-28 text-center bg-transparent backdrop-blur-sm border-2 rounded-tl-lg rounded-br-lg border-indigo-400 text-white p-4'>History</div>
          <div className='text-xl font-bold mx-2 my-2 w-28 text-center bg-transparent backdrop-blur-sm border-2 rounded-tl-lg rounded-br-lg border-indigo-400 text-white p-4'>Kronologi</div>
          <div className='text-xl font-bold mx-2 my-2 w-28 text-center bg-transparent backdrop-blur-sm border-2 rounded-tl-lg rounded-br-lg border-indigo-400 md:text-white text-black p-4'>Timeline</div>
          <div className='text-xl font-bold mx-2 my-2 w-28 text-center bg-transparent backdrop-blur-sm border-2 rounded-tl-lg rounded-br-lg border-indigo-400 text-white p-4'>Raja</div>
          <div className='text-xl font-bold mx-2 my-2 w-28 text-center bg-transparent backdrop-blur-sm border-2 rounded-tl-lg rounded-br-lg border-indigo-400 md:text-white text-black p-4'>Situs</div>
          <div className='text-xl font-bold mx-2 my-2 w-28 text-center bg-transparent backdrop-blur-sm border-2 rounded-tl-lg rounded-br-lg border-indigo-400 md:text-white text-black p-4'>Quiz</div>
          <div className='text-xl font-bold mx-2 my-2 w-28 text-center bg-transparent backdrop-blur-sm border-2 rounded-tl-lg rounded-br-lg border-indigo-400 md:text-white text-black p-4'>About</div>
        </div>
      </div>
    </div>
  )
}

export default Home