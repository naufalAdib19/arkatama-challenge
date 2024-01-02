import TestimonyList from './assets/component/molecules/TestimonyList'
import DetailTestimoni from './assets/component/molecules/DetailTestimoni'
import AddTesti from './assets/component/molecules/AddTesti'

function App() {
  return (
    <>  
      <div className='h-screen flex items-center px-8 gap-x-20'>
        <div className='testi-list-container  max-h-[400px] w-1/2 overflow-scroll shadow-md'>
          <TestimonyList/>
        </div>
        <div className='w-1/2'>
          <DetailTestimoni/>
        </div>
      </div>
      <div className='w-full mb-24 max-w-[1000px] mx-auto'>
        <h1 className='text-center font-bold text-3xl'>Add Testimoni</h1>
        <div className='px-12 shadow-md'>
          <AddTesti/>
        </div>
        
      </div>
    </>
  )
}

export default App
