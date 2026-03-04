import React ,{useContext} from "react";
import UserContext from "../context/UserContext";

//Login does NOT talk to Profile directly...They communicate through the Provider
//Profile gets new user
function Profile()
{
    const {user}=useContext(UserContext)
    if(!user) return <div>Please Login</div>

    return <div> Welcome {user.username} </div>

}
export default Profile