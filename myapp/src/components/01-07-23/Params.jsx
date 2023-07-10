import { useNavigate } from "react-router-dom"

function Params() {
    const route = useNavigate();
    function Click() {
        route("/single-product/123456")
    }
    return (
        <>
            <div>
                <button onClick={Click}>Click here</button>
            </div>
        </>
    )
}
export default Params