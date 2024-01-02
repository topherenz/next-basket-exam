import React from "react";
import Navigation from "./Navigation";
import Promotion from "./Promotion";

const Header = () => {
    return (
        <header>
            <Promotion />
            <Navigation />
        </header>
    )
}

export default Header