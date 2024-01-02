import { useEffect, useState } from 'react'
import axios from 'axios'

type dataType = {
  image: string,
  nama: string,
  email: string,
  asal_instansi: string,
  testimoni: string
}

const DetailTestimoni = () => {
  const path = window.location.pathname
  const finalPath = path.split('/')
  const [data, setdata] = useState<dataType>();

  useEffect(() => {
    axios.get(`https://65938d171493b0116068ae94.mockapi.io/api-arkatama/user-data/data/${finalPath[1]}`)
    .then(res => setdata(res.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="shadow-md rounded px-12 py-5">
      <h1 className='text-center font-bold text-2xl'>Detail Testimoni</h1>
      <hr className='my-5 border border-black'/>
      <div>
        <div className="inline text-center">
          <p>{data?.image}</p>
        </div>
        <p>{data?.nama}</p>
        <p>{data?.email}</p>
        <p>{data?.asal_instansi}</p>
        <p>{data?.testimoni}</p>
      </div>
    </div>
  )
}

export default DetailTestimoni