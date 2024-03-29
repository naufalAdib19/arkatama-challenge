import Testimoni from '../atoms/Testimoni'
import axios from 'axios'
import { useEffect, useState } from 'react'

type dataType = {
    image: string,
    nama: string,
    asal_instansi: string,
    testimoni: string,
    id: string
}[]

const TestimonyList = () => {
    
    const [data, setData] = useState<dataType>([]);

    useEffect(() => {
        axios.get('https://65938d171493b0116068ae94.mockapi.io/api-arkatama/user-data/data')
        .then(response => { 
            setData(response.data)
        })
        .catch(error => console.log(error))
    }, [])

    return (
    <div className="h-full w-full px-2 md:px-12 py-3">
        <h1 className='font-semibold text-lg md:text-2xl text-center'>Testimoni List</h1>
        <hr className='border border-black my-3'/>
        <div>
            {
                data.map((data) => {
                    return(
                        <Testimoni props={{
                            nama: data.nama,
                            asal_instansi: data.asal_instansi,
                            image: data.image,
                            testimoni: data.testimoni,
                            id: data.id
                        }} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default TestimonyList