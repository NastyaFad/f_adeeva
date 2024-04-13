import "./Card.css"

export default function Card( {name, price} ){
    return (
        <>
        
            <div className="card">
                <h1>{name}</h1>
                <h2>{price} ₽</h2>
            </div>

        </>
    )
}