import React from 'react';

import './NavigationItem.css';
import {NavLink} from "react-router-dom";

const NavigationItem = ({to,exact,children}) => (
    <li className="NavigationItem">
        <NavLink to={to} exact={exact}>{children}</NavLink>
    </li>
);

export default NavigationItem;