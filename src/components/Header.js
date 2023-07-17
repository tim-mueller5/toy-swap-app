import { Link } from "react-router-dom"

function Header() {
    return (
      <div>
        <header>
          <h1>Toy Swap App</h1>
          <Link to="/">To Your Listings</Link>
          <a> </a>
          <Link to="/all-listings">To All Listings</Link>
          <a> </a>
          <Link to="/events">To All Events</Link>
        </header>
      </div>
    );
  }
  
  export default Header;
  