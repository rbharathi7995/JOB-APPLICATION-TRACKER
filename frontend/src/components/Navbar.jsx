
function Navbar({ handleLogout }) {
    return(
        <div>
            <h1 className="text-gray-800 text-3xl mt-1 font-bold ml-50 ">Job Application Tracker</h1>
            <button className="bg-red-600 text-white rounded-lg px-3 py-2 hover:bg-red-700 font-semibold"  onClick={handleLogout}>Logout</button>
        </div>
    )
}
export default Navbar;