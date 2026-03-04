import React from "react";
import UserContext from "./UserContext";

//children is whatever you wrap inside the <UserContextProvider> ... </UserContextProvider> component.
const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null);
    return(/* 
        This provider now stores the state, it does NOT reset per child. */
        <UserContext.Provider value={{user,setUser}}> {/* these are the values that i have passed in it so tht i can use it anywhere in the project */}
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider