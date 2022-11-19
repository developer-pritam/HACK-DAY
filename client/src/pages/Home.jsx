import { getUser, login, signOutUser } from "../auth";
import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import { NavLink, Link } from "react-router-dom";

const Home = () => {
  //   const user = getUser();

  const [user, setUser] = useState(null);
  useEffect(() => {
    getUser().then((user) => {
      setUser(user);
    });
  }, []);

  const handleLogin = async () => {
    try {
      const user = await login();
      setUser(user);
    } catch (error) {
      alert(error.message);
    }
  };

  const logout = () => {
    setUser(null);
    signOutUser();
  };
  return (
    <div className="primary-container">
      {user ? (
        <>
          <h1>TFL - Transparent Fund Lookup</h1>
          <br />
          <br />
          <NavLink to="/transfer" tag={Link}>
            <Button text="Transfer" link="/transfer" />
          </NavLink>
          <NavLink to="/transfer" tag={Link}>
            <Button text="History" to="/history" tag={Link} />
          </NavLink>

          <Button text="Sign Out" onClick={logout} />
        </>
      ) : (
        <Button text="Sign In" onClick={handleLogin} />
      )}
    </div>
  );
};

export default Home;
