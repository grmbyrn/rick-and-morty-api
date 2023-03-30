import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const Cards = ({results}) => {
    let display;

    if(Array.isArray(results)) {
        display = results.map(result => {
            let {id, image, name, status, origin} = result
            return (
                <div key={uuidv4()} className="flex flex-col sm:flex-row items-center bg-gray-800 p-4 rounded-lg m-8 w-1/2 mx-auto">
                    <Link to={`/${id}`}>
                        <div className="flex-shrink-0 lg:mr-4">
                            <img src={image} alt='' className="rounded-lg hover:filter hover:brightness-110 hover:saturate-150 hover:contrast-125 hover:opacity-75 cursor-pointer" />
                        </div>
                    </Link>
                    <div className="w-full lg:w-3/4 px-4">
                        <Link to={`/${id}`}>
                            <h2 className="text-lg lg:text-m font-medium text-green-400 hover:text-green-300">Name: {name}</h2>
                        </Link>
                        <p className="text-lg lg:text-m font-medium text-gray-300">Status: {status}</p>
                        <p className="text-lg lg:text-m font-medium text-gray-300">Origin: {origin?.name}</p>
                    </div>
                </div>
            )
        })
    } else {
        display = 'No characters found.'
    }
    return (
        <>{display}</>
    )
}
export default Cards