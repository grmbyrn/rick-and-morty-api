import { useState, useEffect, useRef } from "react"
import Navbar from "../components/Navbar"
import Cards from "./Cards"
import Footer from "../components/Footer"

const Home = () => {
    const [fetchedData, setFetchedData] = useState({info: {}, results: {}})
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [search, setSearch] = useState('')

    const {info, results} = fetchedData
    console.log(fetchedData)

    useEffect(() => {
        async function fetchData(){
            setIsLoading(true)
            const api = `https://rickandmortyapi.com/api/character/?page=${page}`
            const res = await fetch(api)
            const data = await res.json()
            setFetchedData(prevData => ({
                info: data.info,
                results: prevData.results.length ? [...prevData.results, ...data.results] : data.results 
            }))
            setIsLoading(false)
        }
        fetchData()
    }, [page, search])

    const observer = useRef()
    const lastCardRef = useRef()

    useEffect(() => {
        if(isLoading) return

        if(observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && info.next){
                setPage(page => page + 1)
            }
        })

        if(lastCardRef.current) observer.current.observe(lastCardRef.current)
    }, [isLoading, info.next])

  return (
    <div className="bg-pink-300">
      <Navbar />
      <Cards results={results} />
      <div ref={lastCardRef} />
      {isLoading && <p>Loading...</p>}
      {!isLoading && !info.next && <p>No more characters.</p>}
      <Footer />
    </div>
  )
}
export default Home