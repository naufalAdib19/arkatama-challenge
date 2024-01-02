import TestimonyList from './assets/component/molecules/TestimonyList'
import DetailTestimoni from './assets/component/molecules/DetailTestimoni'
import AddTesti from './assets/component/molecules/AddTesti'

function App() {
  return (
    <div className='bg-blue-100 pb-24'>
      <div className='h-screen flex flex-col justify-center lg:flex-row items-center px-8 gap-x-12 gap-y-12'>
        <div className='testi-list-container max-h-[400px] w-full md:w-1/2 overflow-scroll shadow-md bg-white'>
          <TestimonyList/>
        </div>
        <div className='w-full md:w-1/2 bg-white'>
          <DetailTestimoni/>
        </div>
      </div>
      <div className='w-full max-w-[1000px] mx-auto'>
        <h1 className='text-center font-bold text-3xl'>Add Testimoni</h1>
        <div className='px-12 shadow-md bg-white mt-8'>
          <AddTesti/>
        </div>
        
      </div>
    </div>
  )
}

export default App
