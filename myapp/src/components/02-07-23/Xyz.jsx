import { useNavigate } from "react-router-dom"

function Xyz() {
    const route = useNavigate()
    function goTo(){
        route("/new-single-product/12345678")
    }
    return (
        <div>
            <button onClick={goTo}>Click to single product</button>
        </div>
    )
}
export default Xyz