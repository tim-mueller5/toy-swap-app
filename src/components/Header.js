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
        <h3>Current User: {currentUser.name === "" ? "Not Signed in" : currentUser.name}</h3>
      </div>
    );
  }
  
  export default Header;
  