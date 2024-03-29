import axios from 'axios'

type propsType = {
    image: string,
    nama: string,
    asal_instansi: string,
    testimoni: string,
    id: string
}

const Testimoni = ({props}: {props: propsType}) => {

    function onClick() {
        window.location.href = '/' + props.id
    }

    function onDelete() {
        axios.delete(`https://65938d171493b0116068ae94.mockapi.io/api-arkatama/user-data/data/${props.id}`)// @ts-ignore
        .then(res => {
            window.location.href = '/1'
        })
    }

    function truncateString(inputString: string, maxLength: number): string {
        if (inputString.length > maxLength) {
          return inputString.substring(0, maxLength - 3) + '...';
        } else {
          return inputString;
        }
      }

    return (
        <div className="flex justify-between items-center cursor-pointe w-full">
            <div className="px-4 py-2 flex items-center gap-x-5" onClick={onClick}>
                <div className="min-w-[80px] lg:min-w-[120px]">
                    <div>{props.image}</div>
                </div>
                <div>
                    <p className="font-semibold">{props.nama}</p>
                    <p className="italic font-light">{props.asal_instansi}</p>
                    <p>{truncateString(props.testimoni, 30)}</p>
                </div>
            </div>
            <div className="cursor-pointer bg-red-500 text-white px-4 py-1 rounded" onClick={onDelete}>
                delete
            </div>
        </div>
    )
}

export default Testimoni