import { useState } from "react"
import './DynamicClases.css'
const DynamicClases = () => {
    const [isActiveButton, setIsActiveButton] = useState(false);
    const handleClick = () => {
        setIsActiveButton(!isActiveButton)
    }

    return (
        <button className={isActiveButton ? 'active' : 'inactive'} onClick={handleClick}>
            login
        </button>
    )
}
export default DynamicClases