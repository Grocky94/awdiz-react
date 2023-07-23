import { createContext, useEffect, useReducer } from 'react'

export const MyContext = createContext();

const initialState = { user: null };
function reducer(state, action) {
    switch (action.type) {
        case "login":
            return { user: action.payload }
        case "logout":
            return { user: null }
        default:
            return state;
    }
}

const MyContextProvide = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log (state, "state from context");
    const login = () => {
        const userData = JSON.parse(localStorage.getItem("Current-User"))
        if (userData) {
            dispatch({
                type: "login",
                payload: userData,
            })
        }
    }

    const logout = () => {
        localStorage.removeItem('Current-User')
        dispatch({
            type: "logout",
        })
        alert("successfully log Out")
    }
    useEffect(() => {
        const isUserPresent = JSON.parse(localStorage.getItem("Current-User"));
        if (isUserPresent) {
            dispatch({
                type: 'login',
                payload: isUserPresent,
            })
        }
    }, [])
    return (

        <MyContext.Provider value={{ state, login, logout }}>
            {children}
        </MyContext.Provider>
    )

}
export default MyContextProvide;
