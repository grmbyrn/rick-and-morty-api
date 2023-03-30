import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Cards from "./Cards"
import Footer from "../components/Footer"

const Home = () => {
    const [fetchedData, setFetchedData] = useState([])

    const {info, results} = fetchedData
    console.log(fetchedData)

    const api = `https://rickandmortyapi.com/api/character/`

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
      <Cards page='/' results={results} />
      <Footer />
    </>
  )
}
export default Home