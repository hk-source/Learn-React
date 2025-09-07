import { useContext, useState } from "react";
import { Link } from "react-router";
import { LOGO_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="flex justify-between bg-orange-50 shadow-lg">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} alt="logo"></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
