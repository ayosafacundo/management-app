import React from 'react';
import { Link, useLocation } from 'react-router-dom';


function SidebarLink({ name, url, icon, isActive }) {

    const { state } = useLocation();

    return (
        <li className={isActive ? 'active' : undefined}><Link to={`/${state.id}/${url}`}>{icon} {name}</Link></li>
    )
}

export default SidebarLink