
function Navbar({ handleLogout }) {
    return(
        <div>
            <h1>Job Application Tracker</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
export default Navbar;