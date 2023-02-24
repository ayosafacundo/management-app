import React from 'react';
import { Link, useLocation } from 'react-router-dom';


function SidebarLink({ name, url, icon }) {

    const { pathname } = useLocation();
    return (
        <li className={pathname === url ? 'active' : undefined}><Link to={url}>{icon} {name}</Link></li>
    )
}

export default SidebarLink