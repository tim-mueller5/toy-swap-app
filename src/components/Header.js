import { Link } from "react-router-dom"

function Header() {
    return (
      <div>
        <header>
          <h1>Toy Swap App</h1>
          <Link to="/"> To Your Listings </Link>
          <Link to="/all-listings"> To All Listings </Link>
          <Link to="/events"> To All Events </Link>
          <Link to="/login"> Login/Change Current User </Link>
        </header>
      </div>
    );
  }
  
  export default Header;
  