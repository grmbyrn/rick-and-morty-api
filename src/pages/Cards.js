import { Link } from "react-router-dom";

const Cards = ({page, results}) => {
    let display;

    if(results) {
        display = results.map(result => {
            let {id, image, name, status, origin} = result
            return (
                <Link
                    to={`${page}${id}`}
                    key={id}
                >
                    <div className="">
                        <div className="">
                            <img src={image} alt='' />
                        </div>
                        <div className="">
                            <h2>{name}</h2>
                            <p>{status}</p>
                            <p>{origin.name}</p>
                        </div>
                    </div>
                </Link>
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