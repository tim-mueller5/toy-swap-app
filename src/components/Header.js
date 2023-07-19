import { Link } from "react-router-dom"

function Header({ currentUser }) {
    return (
      <div>
        <header>
          <h1>Toy Swap App</h1>
          <Link to="/">To All Listings  </Link>
          <Link to="/events">  |  To All Events  |  </Link>
          <Link to="/user">  User Page</Link>
        </header>
        <h2>Current User: {currentUser.name === "" ? "Not Signed in" : currentUser.name}</h2>
      </div>
    );
  }
  
  export default Header;
  