import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SecureRoute from "./components/api/SecureRoute";
import Footer from "./components/footer/Footer";
import AuthNav from "./components/nav/AuthNav";
import Nav from "./components/nav/Nav";
import Landing from "./pages/landing/Landing";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import Profile from "./pages/user/profile/Profile";

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  useEffect(() => {
    const fetchToken = () => {
      const token = localStorage.getItem("token");
      token && setIsAuth(true)
    }
    fetchToken()
  }, []);


  return (
    <div className="App">
      {!isAuth ? (
        <Nav />
      ) : (
        <AuthNav />
      )}
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<SignIn />} path="/signin" />
        <Route element={<SignUp />} path="/signup" />
        <Route
          path="/auth/profile"
          element={
            <SecureRoute>
              <Profile />
            </SecureRoute>
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
