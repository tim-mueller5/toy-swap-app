import { Link } from "react-router-dom"

function Header() {
    return (
      <div>
        <header>
          <h1>Toy Swap App</h1>
          <Link to="/">To All Listings  </Link>
          <Link to="/events">  |  To All Events  |  </Link>
          <Link to="/user">  User Page</Link>
        </header>
      </div>
    );
  }
  
  export default Header;
  