import { useState } from 'react';


function Login() {
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
        }).then((response) => response.json())
            .then((data) => {
                localStorage.setItem('token', data.token);
                const token = localStorage.getItem('token');
                const headers = {
                    Authorization: `Bearer ${token}`
                };

                fetch('http://localhost:5000/api/jobs', {
                    method:'GET',
                    headers: headers,
                }).then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                    });

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