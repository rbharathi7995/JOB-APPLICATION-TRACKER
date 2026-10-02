import { useState } from 'react';


function Login(){
    const[email,setEmail] =useState('');
    const[password,setPassword] =useState('');
    function handleLogin(){
      console.log(email,password);
    }
    return(
        <div>
            <input onChange={(e) => setEmail(e.target.value)}
            type="text" placeholder="Email" />
            <input onChange={(e) => setPassword(e.target.value)}
            type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;