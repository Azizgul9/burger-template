import React from 'react';
//import {NavLink} from "react-router-dom";

import './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => (
    <ul className="NavigationItems">
        {/*<li className="NavigationItem">
            <NavLink to="/" exact>Burger Builder</NavLink>
        </li>*/}
        <NavigationItem to={"/"} exact>Burger Builder</NavigationItem>
        <NavigationItem to={"/orders"} exact>Orders</NavigationItem>
    </ul>
);

export default NavigationItems;