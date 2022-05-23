import React from "react";
import './Menu_Items.css';

function Menu_Items({ active, text }) {
    return (
        <div className={`menuItems ${active && 'menuItems--active'}`}>
            <h2> {text} </h2>
        </div>
    );
}

export default Menu_Items;