import { NavLink } from "react-router-dom"
import "./Product.css"

export default function Product({ id, title, price, preview, quantity }) {
    return (
        <>

            <NavLink to={"/catalog/" + id}>
                <div className="product">
                    <img src={preview} alt="" className="product-img" />
                    <div className="product-quantity">{quantity}</div>
                    <div className="product-title">{title}</div>
                    <div className="product-price">{price} ₽</div>
                    
                </div>
            </NavLink>

        </>
    )
}