import { Link } from "react-router-dom";

const Cards = ({results}) => {
    let display;

    if(Array.isArray(results)) {
        display = results.map(result => {
            let {id, image, name, status, origin} = result
            return (
                <div key={id}>
                    <Link
                        to={`/character/${id}`}
                    >
                        <div className="">
                            <img src={image} alt='' />
                        </div>
                    </Link>
                    <div className="">
                        <Link
                            to={`/character/${id}`}
                        >
                            <h2>{name}</h2>
                        </Link>
                        <p>{status}</p>
                        <p>{origin?.name}</p>
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