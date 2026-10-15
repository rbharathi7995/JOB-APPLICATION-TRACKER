import { useState } from 'react';


function Login({ setIsLoggedIn , setShowRegister}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[error, setError] = useState('');
    

    function handleLogin() {
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
            return response.json();
        })
            .then((data) => {
                if(data.token){ 
                 setError(''); //After a successful login, we should clear any old error
                 localStorage.setItem('token', data.token);
                 setIsLoggedIn(true);
                }
                else{
                    setError(data.message);
                }

          });
        }
    

    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">

        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

            <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
                Welcome Back
            </h1>
            <p className="mb-6 text-center text-gray-500">
                 Log in to manage your job applications.
            </p>

            {error && (
                <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                {error}
                </p>
            )}

            <div class="space-y-4">
                <input 
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    placeholder="Email" 
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                <input 
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    placeholder="Password" 
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                <button 
                    onClick={handleLogin}
                    className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"

                >Login</button>

                <button 
                    onClick={()=> setShowRegister(true)}
                    className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 hover:underline"
                >Don't have an account? Register</button>
            </div>

        </div>
    </main>
    )
}

export default Login;