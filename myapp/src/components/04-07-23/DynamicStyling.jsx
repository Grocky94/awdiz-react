import { useState } from "react"

const DynamicStyling = () => {
    const [backgroundColor, setBackgroundColour] = useState('purple');
    const HandleButton = () => {
        setBackgroundColour('blue')
    };
    const style = {
        backgroundColor: backgroundColor,
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        cursor: 'pointer'
    };
    return (

        <div style={style} onClick={HandleButton}>
            Click here to change to blue
        </div>

    )
}
export default DynamicStyling