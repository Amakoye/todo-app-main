import React, { useContext } from "react";
import { TodosContext } from "../App";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";

const Header = () => {
  const { toggleLight, isLight } = useContext(TodosContext);
  //change the background on toggle
  const handleClick = () => {
    toggleLight();
  };

  return (
    <div className="app-header col-md-6 mx-auto">
      <h1 className="header-title">TODO</h1>
      {isLight ? (
        <img className="toggle-light" src={sun} alt="" onClick={handleClick} />
      ) : (
        <img className="toggle-light" src={moon} alt="" onClick={handleClick} />
      )}
    </div>
  );
};

export default Header;
