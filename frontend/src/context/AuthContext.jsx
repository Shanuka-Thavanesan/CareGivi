import { createContext, useEffect, useReducer } from "react";

// initilize the initialState
const initialState = {
    user: localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : null,
    role: localStorage.getItem('role') || null,
    token: localStorage.getItem('token') || null,
   
}

// creates a context object
// initializes the context with the initialState
// used to share authentication-related data
export const authContext = createContext(initialState);

//  represents a reducer function
// useReducer hook, reducers are functions that take the current state as an argument
const authReducer = (state, action) => {

    // type property of the action object.
    switch (action.type) {

        // // login process initiated
        case 'LOGIN_START':
            return {
                user: null,
                role: null,
                token: null,
              
            };

            // properties are set to values provided in the payload of the action. 
        case "LOGIN_SUCCESS":
            return {
                user: action.payload.user,
                token: action.payload.token,
                role: action.payload.role,
               
            };

        //  user has logged out.
        case 'LOGOUT':
            return {
                user: null,
                role: null,
                token: null,
               
            };

        // If none of the above cases match, it simply returns the current state
        default:
            return state;
    }

};


// extract the children prop from the component's props
// children=represents the nested elements within the component.
export const AuthContextProvider = ({ children }) => {

    // useReducer hook=create state management system for the authentication context
    // initializes the state with initialState
    //  sets up the reducer function authReducer to handle state updates.
    const [state, dispatch] = useReducer(authReducer, initialState);

    // side effect function
    useEffect(() => {
        // store the user, role,token in loacal storage
        localStorage.setItem('user', JSON.stringify(state.user));       
        localStorage.setItem('token', state.token);
        localStorage.setItem('role', state.role);
       
    }, [state]);

    return (
        <authContext.Provider
        // sets the value of the context provider
            value={{
                user: state.user,
                token: state.token,
                role: state.role,
                dispatch
            }}>
            {children}
        </authContext.Provider>
    );
}