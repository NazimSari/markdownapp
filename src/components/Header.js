import React from "react";
import { useDispatch } from "react-redux";
import { clickHelpChange } from "../redux/markdownSlice";

function Header() {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <h1>Markdown Previewer</h1>
      <button onClick={() => dispatch(clickHelpChange())}>?</button>
    </div>
  );
}

export default Header;
