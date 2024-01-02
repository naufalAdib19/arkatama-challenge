// @ts-ignore
import { useState, useEffect } from 'react'
import axios from 'axios'

const AddTesti = () => {
    const [nama, setNama] = useState<string>()
    const [email, setemail] = useState<string>()
    const [asalInstansi, setasalInstansi] = useState<string>()
    const [testimoni, settestimoni] = useState<string>()
    const [image, setimage] = useState<string>()

    const nameHandleChange = (event) => {
        setNama(event.target.value);
    }

    const emailHandleChange = (event) => {
        setemail(event.target.value);
    }

    const asalInstansiHandleChange = (event) => {
        setasalInstansi(event.target.value);
    }

    const testimoniHandleChange = (event) => {
        settestimoni(event.target.value);
    }

    const imageHandleChange = (event) => {
        setimage(event.target.value);
    }

    const data = {
        nama: nama,
        email: email,
        asal_instansi: asalInstansi,
        testimoni: testimoni,
        image: image
    }

    function dataSubmit() {
        axios.post('https://65938d171493b0116068ae94.mockapi.io/api-arkatama/user-data/data', data)
        .then(response => location.reload())
        .catch(err => console.log(err))
    }
    
    return (
        <div>
            <div className="py-7 flex flex-col gap-y-4">
                <div>
                    <label htmlFor="nama">Nama: </label>
                    <input type="text" placeholder="nama" className="py-1 px-2 w-1/4" name="nama" onChange={nameHandleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" placeholder="email" className="py-1 px-2 w-1/4" name="email" onChange={emailHandleChange}/>
                </div>
                <div>
                    <label htmlFor="asal_instansi">Asal Instansi: </label>
                    <input type="text" placeholder="Asal Instansi" className="py-1 px-2 w-1/4" name="asal_instansi" onChange={asalInstansiHandleChange}/>
                </div>
                <div>
                    <label htmlFor="testimoni">Testimoni: </label>
                    <input type="text" placeholder="Testimoni" className="py-1 px-2 w-1/4" name="testimoni" onChange={testimoniHandleChange}/>
                </div> 
                <div>
                    <label htmlFor="image">Image: </label>
                    <input type="text" placeholder="Image" className="py-1 px-2 w-1/4" name="image" onChange={imageHandleChange}/>
                </div> 
                <button className="bg-blue-500 w-[200px] text-white rounded-md font-semibold py-2" onClick={dataSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default AddTesti