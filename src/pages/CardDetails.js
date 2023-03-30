import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"

const CardDetails = () => {
  const {id} = useParams()
  const [fetchedData, setFetchedData] = useState([])
  const {image, name, status, origin, gender, location} = fetchedData

  const api = `https://rickandmortyapi.com/api/character/${id}`

  useEffect(() => {
    async function fetchData(){
      const res = await fetch(api)
      const data = await res.json()
      setFetchedData(data)
    }
    fetchData()
  }, [api])

  return (
    <div className="bg-green-900 h-screen">
      <Navbar />
      <div className="flex flex-col sm:flex-row items-center bg-gray-800 p-4 rounded-lg m-8 w-1/2 mx-auto">
        <div className="flex-shrink-1 lg:mr-4">
            <img src={image} alt='' className="rounded-lg" />
        </div>
        <div className="w-full lg:w-3/4 px-4">
            <h2 className="text-lg font-medium text-green-400">Name: {name}</h2>
            <p className="text-lg font-medium text-gray-300">Status: {status}</p>
            <p className="text-lg font-medium text-gray-300">Origin: {origin?.name}</p>
            <p className="text-lg font-medium text-gray-300">Gender: {gender}</p>
            <p className="text-lg font-medium text-gray-300">Location: {location?.name}</p>
        </div>
      </div>
    </div>
  )
}
export default CardDetails