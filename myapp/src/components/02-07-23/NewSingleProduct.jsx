import { useParams } from "react-router-dom"

const NewSingleProduct = () => {
    const data = useParams();
    console.log(data, "-data");

    return (
        <div>
            <h1>single product</h1>
            <h1>{data.id && data.id}</h1>
        </div>
    )
}
export default NewSingleProduct