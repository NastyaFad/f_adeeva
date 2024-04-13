import { NavLink } from "react-router-dom"
import "./SingleProduct.css"
import Button from "../Button/Button"

export default function SingleProduct({ id, title, price, preview }) {



    return (
        <>


            <div className="product1">
                <img src={preview} alt="" className="product1-img" />
                <div className="info">
                    <div className="product-title1">{title}</div>
                    <div className="product-pric1e1">{price} ₽</div>
                </div>

            </div>


        </>
    )
}