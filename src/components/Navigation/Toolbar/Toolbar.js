import React from 'react';
import Logo from "../../Logo/Logo";

import './Toolbar.css';
import NavigationItems from "../NavigationItems/NavigationItems";


const Toolbar = () => (

    <header className="Toolbar">
        <div className="Toolbar-logo">
            <Logo/>
        </div>
        <nav>
            <NavigationItems />
        </nav>
    </header>

);



export default Toolbar;