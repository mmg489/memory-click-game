import React from "react";
import "./Header.css";

const Header = props => (
    <header className="header">
        <h1>Memory Click Game!</h1>
        <h2>
            Click a picture to earn a point! Don't repeat a click on the same image!
            Try to "first time" click as many pictures as you remember.
            Clicking the same picture twice will end the round and reset the game!
        </h2>
    </header>
);

export default Header;