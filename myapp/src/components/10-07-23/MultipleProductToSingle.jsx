import React from 'react'
import "./MultipleProductToSingle.css"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const MultipleProductToSingle = () => {
  const [Product, setProduct] = useState([])
  const [single, setSingle] = useState({})
  console.log(Product, "single")
  const { id } = useParams();
  console.log(id, "id - here")

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProduct(json));
    // .then(json=>console.log(json))
  }, []);


  useEffect(() => {
    if (id && Product.length) {
      const show = Product.find((item) => item.id == id)
      setSingle(show)
    }

  }, [id, Product])

  console.log(single, "- single here")
  return (
    <>
      <div id='multiple-parent'>
        <div id='left-side'>
          <div id='left-side-top'>
            <div id='left-side-top-1'>
              <img src={single.image} />
            </div>
            <div id='left-side-top-2'>
              <img src={single.image} />
            </div>
          </div>
          <div id='left-side-down'>
            <div id='left-side-down-1'>
              <img src={single.image} />
            </div>
            <div id='left-side-down-2'>
              <img src={single.image} />
            </div>
            <div id='left-side-down-3'>
              <img src={single.image} />
            </div>
          </div>
        </div>
        <div id='right-side'>
          <h1 id='product-title'>{single.title}</h1>
          <div id='product-details-parent'>
            <p id='product-details'>{single.description}</p>
          </div>
          <div id='price-rate-count'>
            <p id='product-hasPrice'> Rs.{single.price}</p>
            <p id='Product-rating'>Rating: {single.rating?.rate}</p>
            <p id='Product-count'>Count:{single.rating?.count}</p>
          </div>
        </div>
      </div>
    </>)
}

export default MultipleProductToSingle
