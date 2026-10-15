import { useState } from "react";
function Register( {setShowRegister} ){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    function handleRegister(){
        const registerData ={
            name,
            email,
            password
        };

        fetch('http://localhost:5000/api/auth/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerData)
        }).then(async (response)=> {
            const data = await response.json();

            if(!response.ok){
                throw new Error(data.message || 'Registration failed.');
            }
            return data;
        }).then(() => {
            setError('');
            setMessage("Registration successful. Please log in.");
        
        }).catch((error)=>{
            setMessage('');
            setError(error.message)
        });
    }
    return(
        <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
            <h1 className="mb-4 text-center text-3xl font-bold text-gray-800">
                Create Your Account
            </h1>
            <p className="mb-6 text-center text-gray-500">
                Start tracking your job applications in one place.
            </p>

            {error && <p className="rounded-lg mb-4 bg-red-100 text-sm text-red-700 p-2">{error}</p>}
            {message && 
                <div>
                    <p className="mb-3 text-sm text-green-600">{message}</p>
                    <button
                        onClick={() => setShowRegister(false)}
                        className="text-blue-600 hover:underline font-bold mb-1"
                    >Go to Login</button>
                </div>
            }    

            <div className="space-y-4">
                <input 
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    placeholder="Name" 
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />

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
                    onClick={handleRegister}
                    className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"

                >Register</button>
            </div>
        </div>
        </main>

    )
}

export default Register;