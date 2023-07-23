import React from 'react'
import "./MultipleProductToSingle.css"
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const MultipleProductToSingle = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState();
  const [Product, setProduct] = useState([])
  const [single, setSingle] = useState({})
  const [cartCounter, setCartCounter] = useState(0);
  console.log(Product, "single")
  const { id } = useParams();
  console.log(id, "id - here")
  const router = useNavigate();
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

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('Current-User'));
    console.log(user, 'user');
    if (user) {
      setIsUserLoggedIn(true);
      setCurrentUserEmail(user.email)
    }
  })
  // useEffect(() => {
  //   setCartCounter(Product.length);
  // }, [Product]);


  function addtocart() {
    if (isUserLoggedIn) {
      const users = JSON.parse(localStorage.getItem('Users'))
      let user = JSON.parse(localStorage.getItem('Current-User'));

      for (let i = 0; i < users.length; i++) {
        if (users[i].email == user.email) {

          users[i].cart.push(single);
          localStorage.setItem("Users", JSON.stringify(users));
          alert("product has been added");
          router('/cart')
          break;

        } else {
          alert("You cant add product before login...")

        }

      }

    }
  }

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
          {currentUserEmail ? <button id='add-to-cart' onClick={addtocart}>Add to Cart</button> : ''}
        </div>
      </div>
    </>)
}

export default MultipleProductToSingle
