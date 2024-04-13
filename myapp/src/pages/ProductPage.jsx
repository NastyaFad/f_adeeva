import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import { useParams } from "react-router-dom";
import SingleProduct from "../components/SingleProduct/SingleProduct";

export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://646bafb47d3c1cae4ce42749.mockapi.io/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            });
    }, [id]); // Теперь эффект будет перезапускаться при изменении id

    function addToCart() {
        if (product) {
            const newProduct = {
                title: product.title,
                subtitle: product.subtitle,
                description: product.description,
                price: product.price,
                quantity: 1, // Устанавливаем количество товара в корзине
                availability: product.availability,
                preview: product.preview,
                // id: product.id // Не добавляем id, так как он обычно генерируется сервером
            };

            const storedProducts = localStorage.getItem('products');
            let productsArray = storedProducts ? JSON.parse(storedProducts) : [];

            // Проверяем, есть ли уже такой товар в корзине
            const existingProductIndex = productsArray.findIndex(p => p.title === newProduct.title);
            if (existingProductIndex !== -1) {
                // Если товар уже есть, увеличиваем его количество
                productsArray[existingProductIndex].quantity += 1;
            } else {
                // Если товара нет, добавляем его в корзину
                productsArray.push(newProduct);
            }

            localStorage.setItem('products', JSON.stringify(productsArray));
        }
    }

    return (
        <>
            <div className="product-container">
                {product && (
                    <>
                        <SingleProduct
                            title={product.title}
                            price={product.price}
                            preview={product.preview}
                            
                        />
                    
                      <button className="main-btn" onClick={addToCart}>Купить</button>
                      
                    </>
                )}
            </div>
        </>
    );
}