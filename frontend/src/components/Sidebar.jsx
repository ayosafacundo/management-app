import React from 'react';
import { SlScreenDesktop } from 'react-icons/sl';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import SidebarLink from '../components/SidebarLink';
import { useLocation } from 'react-router-dom';



function Sidebar({ privileges }) {

    const { pathname } = useLocation();
    const path = pathname.split('/');

    return (
        <nav>
            <ul>
                <SidebarLink name="Dashboard" url="dashboard" icon={<SlScreenDesktop />} isActive={path[path.length - 1] === 'dashboard' ? true : false} />
                {privileges?.admin ? (<SidebarLink name="Admin Panel" url="admin" icon={<MdOutlineAdminPanelSettings />} isActive={path[path.length - 1] === 'admin' ? true : false} />) : undefined}
                {privileges?.teacher ? (<SidebarLink name="Teacher Panel" url="teacher" icon={<MdOutlineAdminPanelSettings />} isActive={path[path.length - 1] === 'teacher' ? true : false} />) : undefined}
                {privileges?.student || privileges.treasurer ? (<SidebarLink name="Fees" url="fees" icon={<MdOutlineAdminPanelSettings />} isActive={path[path.length - 1] === 'fees' ? true : false} />) : undefined}


            </ul>
        </nav>
    )
}

export default Sidebar