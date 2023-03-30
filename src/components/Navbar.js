import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-gray-800 py-6 px-12">
      <Link to={'/'} className="text-4xl font-bold text-green-400 hover:text-green-300">
        <h1>Rick and Morty</h1>
      </Link>
    </div>
  )
}
export default Navbar