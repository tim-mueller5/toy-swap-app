import { Link } from "react-router-dom"

function Header({ currentUser }) {
  return (
    <div className="header">
      <header>
        <h1>Toy Swap App</h1>
        <Link to="/">Home</Link>
        <label> | </label>
        <Link to="/all-listings">To All Listings</Link>
        <label> | </label>
        <Link to="/events">To All Events</Link>
        <label> | </label>
        <Link to="/user">User Page</Link>
      </header>
      <h2>Current User: {currentUser.name === "" ? "Not Signed in" : currentUser.name}</h2>
    </div>
  );
}
  
export default Header;
  