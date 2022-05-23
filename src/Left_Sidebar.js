import React from "react";
import './Sidebar.css'
import SidebarOption from "./SidebarOption";
import  {IonButton}  from '@ionic/react';


function Sidebar() {
    return (
        <div classname="sidebar">
            <div className="first_option">
                <SidebarOption active text="Home" />
            </div>
            <SidebarOption text="Explore"/>
            <SidebarOption text="Notifications"/>
            <SidebarOption text="Messages"/>
            <SidebarOption text="More"/>
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}

            {/* Button */}
            
        </div>

    );
}

export default Sidebar;