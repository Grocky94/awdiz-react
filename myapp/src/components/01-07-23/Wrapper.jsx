
function Wrapper({ name }) {
    return (
        <div style={{ background: "lightgray", padding: "20px" }}>
            {name}
        </div>
    )
}

function MyComponent(){
    return <Wrapper name="Rocky" />
}
export default MyComponent