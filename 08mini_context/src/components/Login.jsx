import React , {useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}=useContext(UserContext) // like this we can access elements from diff folders

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
    
    return(
        <div>
            <h2>Login</h2>
            <input type='text'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='username'  />
            <h2>Password</h2>
            <input type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='password'  />
            
            <button onClick={handleSubmit}>
            Submit</button>
        </div>
    )
}
        export default Login    