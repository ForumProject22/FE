import { Link, useNavigate } from "react-router-dom";

const AuthNav = () => {
  const nav = useNavigate();
  const onClick = () => {
    localStorage.removeItem("token")
    window.location.reload();
    nav('/')
  }

  return (
    <header>
      Welcome to Community Forum!
      <nav>
            <Link to="/" onClick={onClick}>
              Sign Out
            </Link>
      </nav>
    </header>
  );
};

export default AuthNav;
