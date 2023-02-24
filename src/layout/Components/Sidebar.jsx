import React from 'react';
import { SlScreenDesktop } from 'react-icons/sl';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import SidebarLink from '../../components/Sidebar/SidebarLink';
import { Link, useLocation } from 'react-router-dom';



function Sidebar({ privileges }) {

    const { pathname } = useLocation();

    return (
        <nav>
            <ul>
                <li className={pathname === '/dashboard' ? 'active' : undefined}><Link to="/dashboard"><SlScreenDesktop /> Dashboard</Link></li>
                {privileges?.admin ? (<SidebarLink name="Admin Panel" url="/admin" icon={<MdOutlineAdminPanelSettings />} />) : undefined}
                {privileges?.teacher ? (<SidebarLink name="Teacher Panel" url="/teacher" icon={<MdOutlineAdminPanelSettings />} />) : undefined}


            </ul>
        </nav>
    )
}

export default Sidebar