

const Button = ({ children }) => {
    return (
        <button>
            {children}
        </button>
    )

}
function ChildrenProp() {
    return (
        <Button>
            Click here
        </Button>
    )
}
export default ChildrenProp