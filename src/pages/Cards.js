const Cards = ({results}) => {
    let display;

    if(results) {
        display = results.map(result => {
            let {id, image, name, status, origin} = result
            return (
                <div className="" key={id}>
                    <div className="">
                        <img src={image} alt='' />
                    </div>
                    <div className="">
                        <h2>{name}</h2>
                        <p>{status}</p>
                        <p>{origin.name}</p>
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