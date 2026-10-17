import { useEffect,useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Applications from './pages/Applications.jsx';
import AddJobPage from './pages/AddJobPage.jsx';
import EditJob from './pages/EditJob.jsx';

function App() {
      const[jobs, setJobs] = useState([]);
      const [loading, setLoading] = useState(true);
      const [isLoggedIn, setIsLoggedIn] = useState(
        () => localStorage.getItem('token') !== null
      );
      const [showRegister, setShowRegister] = useState(false);

      useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
         return;
        }
        
        fetch(`${import.meta.env.VITE_API_URL}/api/jobs`,{
          method:'GET',
          headers: {
            Authorization:`Bearer ${token}`
          }
        })
        .then((response) => 
          response.json())
        .then((data) => {
          setJobs(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
      },[isLoggedIn]);
     
      function handleLogout(){
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        
        setJobs([]);
     }

    function handleDelete(id){
      fetch(`${import.meta.env.VITE_API_URL}/api/jobs/${id}`,{
        method : 'DELETE',
        headers:{
          'Authorization' :`Bearer ${localStorage.getItem('token')}`
        }

      }).then((response) => {
        return response.json();
      }).then(() => {
        setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
      })
      
     }

return (
  <BrowserRouter>
    {isLoggedIn ? (
      <>
        <Navbar handleLogout={handleLogout} />

        {loading && <p>Loading...</p>}

        <Routes>
          <Route
            path="/"
            element={<Navigate to="/dashboard" replace />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard jobs={jobs} />}
          />

          <Route
            path="/applications"
            element={
              <Applications
                jobs={jobs}
                onDelete={handleDelete}
              />
            }
          />

          <Route
            path="/add-job"
            element={<AddJobPage setJobs={setJobs} />}
          />

          <Route
            path="/edit-job/:id"
            element={
              <EditJob jobs={jobs} setJobs={setJobs} />
            }
          />
        </Routes>
      </>
    ) : (
      showRegister ? (
        <Register setShowRegister = {setShowRegister} />
      ):(
      <Login 
        setIsLoggedIn={setIsLoggedIn}   //allows Login.jsx to call setIsLoggedIn(true) after successful login.
        setShowRegister={setShowRegister}/>
    )
  )}

    
  </BrowserRouter>
);
}

export default App
