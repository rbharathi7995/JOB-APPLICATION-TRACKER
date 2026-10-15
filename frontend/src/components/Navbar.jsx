import { Link } from 'react-router-dom';
function Navbar({ handleLogout }) {
    return(
        <header className="bg-white sticky top-0 z-50 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-2 px-3 py-2 mb-4 sm:px-4 md:gap-3 lg:gap-6 lg:px-6 lg:py-3">
            
        
            <div className='flex flex-wrap justify-center md:justify-start gap-9'>
                <Link className="hover:text-blue-600" to="/dashboard">Dashboard</Link>
                <Link className="hover:text-blue-600" to="/applications">Applications</Link>
                <Link className="hover:text-blue-600" to="/add-job">Add Job</Link>
            </div>

            <h1 className="mt-0 text-gray-800 text-xl sm:text-2xl lg:text-3xl  font-bold text-center md:whitespace-nowrap">Job Application Tracker</h1>
            <button className="w-fit justify-self-center md:justify-self-end bg-red-600 text-white rounded-lg px-3 py-2 hover:bg-red-700 font-semibold"  onClick={handleLogout}>Logout</button>

        </header>
    )
}
export default Navbar;