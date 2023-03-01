import React from 'react';
import { SlScreenDesktop } from 'react-icons/sl';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import SidebarLink from '../components/SidebarLink';
import { useLocation } from 'react-router-dom';
import Accordion from './Accordion';



function Sidebar({ privileges }) {

    const { pathname } = useLocation();
    const path = pathname.split('/');

    return (
        <nav>
            <ul>
                <SidebarLink name="Dashboard" url="dashboard" icon={<SlScreenDesktop />} isActive={path[path.length - 1] === 'dashboard' ? true : false} />
                {privileges?.admin ? (
                    <Accordion title="Admin Panel" icon={<MdOutlineAdminPanelSettings />}>
                        <SidebarLink name="Settings" url="admin/settings" icon={<MdOutlineAdminPanelSettings />} isActive={path[path.length - 1] === 'admin' ? true : false} />
                    </Accordion>
                ) : undefined}
                {privileges?.teacher ? (<SidebarLink name="Teacher Panel" url="teacher" icon={<MdOutlineAdminPanelSettings />} isActive={path[path.length - 1] === 'teacher' ? true : false} />) : undefined}
                {privileges?.librarian ? (<SidebarLink name="Library" url="library" icon={<MdOutlineAdminPanelSettings />} isActive={path[path.length - 1] === 'library' ? true : false} />) : undefined}
                {privileges?.student || privileges?.treasurer ? (<SidebarLink name="Fees" url="fees" icon={<MdOutlineAdminPanelSettings />} isActive={path[path.length - 1] === 'fees' ? true : false} />) : undefined}


            </ul>
        </nav>
    )
}

export default Sidebar