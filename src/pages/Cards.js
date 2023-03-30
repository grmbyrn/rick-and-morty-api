import { Link } from "react-router-dom";

const Cards = ({page, results}) => {
    let display;

    if(results) {
        display = results.map(result => {
            let {id, image, name, status, origin} = result
            return (
                <>
                
                    <div className="">
                        <Link
                            to={`${page}${id}`}
                            key={id}
                        >
                            <div className="">
                                <img src={image} alt='' />
                            </div>
                        </Link>
                        <div className="">
                            <Link
                                to={`${page}${id}`}
                                key={id}
                            >
                                <h2>{name}</h2>
                            </Link>
                            <p>{status}</p>
                            <p>{origin?.name}</p>
                        </div>
                    </div>
                
                </>
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