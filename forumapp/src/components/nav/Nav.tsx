import { Link } from "react-router-dom";

const Nav = () => {


  return (
    <header>
      Welcome to Community Forum! Please Log In!!!
      <nav>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
      </nav>
    </header>
  );
};

export default Nav;
