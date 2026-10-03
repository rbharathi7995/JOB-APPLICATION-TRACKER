import { useState } from 'react';


function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleLogin() {
        console.log(email, password);
        const loginData = {
            email,
            password
        };

        fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        }).then((response) => {
            console.log(response.ok);
            return response.json();
        })
            .then((data) => {
                if(data.token){ 
                localStorage.setItem('token', data.token);
                setIsLoggedIn(true);
                }
                else{
                    console.log(data.message);
                }

          });
        }
    

    return (
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