import myData from "./../../data/Myproducts.json"
function DeclerativeWay() {
    return (
        <div>
            {myData.map((product) => (
                <div>
                    <h1>Product Name: {product.name}</h1>
                    <h1>Product Price: {product.price}</h1>
                    <h1>Product Description: {product.description}</h1>
                </div>
            ))}
        </div>
    )
}
export default DeclerativeWay