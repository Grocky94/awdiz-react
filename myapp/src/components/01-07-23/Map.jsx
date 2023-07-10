function Map(props) {
    console.log(props.myUser, "-i m here");

    return (
        <>
            <div>
                {props.user && props.user.map((str) => (
                    <div key={str}>
                        <h1>{str}</h1>
                    </div>
                ))}
                <button onClick={() => props?.setMyUser([...props.myUser, "mark"])}>Add User</button>
                <h4>{props.myName && props.myName}</h4>
            </div>
        </>
    )
}
export default Map