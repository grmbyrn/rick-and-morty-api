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
    <>
      <Navbar />
      <div className="">
        <div className="">
            <img src={image} alt='' />
        </div>
        <div className="">
            <h2>{name}</h2>
            <p>{status}</p>
            <p>{origin?.name}</p>
            <p>{gender}</p>
            <p>{location?.name}</p>
        </div>
      </div>
    </>
  )
}
export default CardDetails