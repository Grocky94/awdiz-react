import React, { useEffect, useState } from 'react'
import "./ProductFromBackend.css"
import { useNavigate } from 'react-router-dom'
const ProductFromBackend = () => {
    const [item, setItems] = useState([])
    // console.log(item, "item"); 

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setItems(json));
        // .then(json=>console.log(json))
    }, [])

    const route = useNavigate();
    const navigate = (id) => {
        // alert('its working')
        route(`/multipleProductToSingle/${id}`)
    }


    return (
        <div id="parent-div">
            {item.length && item ?
                item.map((singleItem) => (
                        <div id='product-div' key={singleItem.id} onClick={() => navigate(singleItem.id)}>
                            <div id='image-holder'>
                                <img src={singleItem.image} />
                                <div id='count'>{singleItem.id}</div>
                            </div>
                            <p id='product-title'>{singleItem.title}</p>
                            <p id='product-price'> ₹ {singleItem.price}</p>
                            <p id='product-decription'>{singleItem.description}</p>
                            <p id='product-rate'>rate: {singleItem.rating.rate}</p>
                        </div>
                )) : <div id='loading-image'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921' />
                </div>

            }
            {/* <div id='loading-image'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921' />
                </div> */}
        </div>
    )
}

export default ProductFromBackend
