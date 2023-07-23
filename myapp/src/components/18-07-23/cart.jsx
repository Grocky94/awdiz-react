
import { useEffect, useState } from "react"
import "./Cart.css"
import { useNavigate } from "react-router-dom"
const Cart = () => {
    const [userCart, setUserCart] = useState([]);
    // console.log(userCart)
    const [finalPrice, setFinalPrice] = useState(0);
    const allUser = JSON.parse(localStorage.getItem("Users"));
    const user = JSON.parse(localStorage.getItem("Current-User"));
    // console.log(userCart, "userCart here")
    const routes = useNavigate()
    useEffect(() => {

        if (user?.email) {
            for (let i = 0; i < allUser.length; i++) {
                if (allUser[i].email == user.email && allUser[i].password == user.password) {
                    setUserCart(allUser[i].cart);

                    break;
                }
            }
        } else {
            alert("please login to proceed")
            routes('/')
        }

    }, [])
    useEffect(() => {
        if (userCart.length) {
            var totalPrice = 0;
            for (var i = 0; i < userCart.length; i++) {
                totalPrice += userCart[i].price
            }
            setFinalPrice(totalPrice)
        }
    }, [userCart])

    const cartDeleting = (index) => {
        const allUser = JSON.parse(localStorage.getItem("Users"));
        const user = JSON.parse(localStorage.getItem("Current-User"));
        if (userCart.length) {
            for (let i = 0; i < allUser.length; i++) {
                if (allUser[i].name == user.name && allUser[i].email == user.email && allUser[i].password == user.password) {
                    // const product = allUser[i].slice();
                    allUser[i].cart.splice(index, 1);
                    setUserCart(allUser[i].cart);
                    localStorage.setItem("Users", JSON.stringify(allUser))
                    break
                }
            }

        }
    }
    function buyProducts() {
        const user = JSON.parse(localStorage.getItem("Current-User"));
        if (user?.email) {
            const allUsers = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email == user.email && allUsers[i].password == user.password) {
                    allUsers[i].cart = [];

                    localStorage.setItem("Users", JSON.stringify(allUsers))
                    break;
                }
            }
            setFinalPrice(0)
            setUserCart([]);
            alert("Product will deliver soon, Thank you for shopping.")
        }
    }

    return (
        <div id="parent-cart">
            <div id="left-side-cart">
                {userCart && userCart.map((item, index) => (
                    <div id="product-cart" key={index}>
                        <div id="product-image-holder">
                            <span id="cross" onClick={() => cartDeleting(index)}>X</span>
                            <img id="product-image" src={item.image} />
                        </div>
                        <p>Title:{item.title}</p>
                        <br />
                        <p>Price:{item.price}</p>
                        <br />
                        <p>Rating:{item.rating?.rate}</p>
                        <div>Cart Counter: {userCart.cart}</div>
                    </div>
                ))}
            </div>
            <div id="right-side-cart">
                <h1>Total </h1>
                <p>Total MRP : {finalPrice + finalPrice} $ </p>
                <p>Price after 50% Discount : {Math.round(finalPrice)} $ </p>
                <button id="buy-btn" onClick={buyProducts} >Buy Products</button>
            </div>
        </div>
    )
}
export default Cart