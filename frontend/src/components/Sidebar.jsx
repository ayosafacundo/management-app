import React from 'react';
import { SlScreenDesktop, SlGraduation, SlBookOpen, SlBriefcase } from 'react-icons/sl';
import { RiCoinsLine } from 'react-icons/ri';
import { MdOutlineAdminPanelSettings, MdOutlineHome } from 'react-icons/md';
import { BsGearFill } from 'react-icons/bs';
import SidebarLink from '../components/SidebarLink';
import { useLocation } from 'react-router-dom';
import Accordion from './Accordion';



function Sidebar({ privileges }) {

    const { pathname } = useLocation();
    const path = pathname.split('/');
    const isActive = ({ accordion, url }) => {
        if (path[path.length - 2] === accordion && (path[path.length - 1] === url || url === '*')) {
            return true
        }
        return false
    };

    return (
        <nav>
            <ul>
                <SidebarLink name="Dashboard" url="dashboard" icon={<SlScreenDesktop />} isActive={isActive({ url: 'dashboard' })} />
                {privileges?.student ? (
                    <Accordion title="Student Panel" path={path} accordion='student' icon={<SlGraduation />}>
                        <SidebarLink name="Home" url="student/home" icon={<MdOutlineHome />} isActive={isActive({ accordion: 'student', url: 'home' })} />
                        <SidebarLink name="Courses" url="student/courses" icon={<SlGraduation />} isActive={isActive({ accordion: 'student', url: 'courses' })} />
                        <SidebarLink name="Settings" url="student/settings" icon={<BsGearFill />} isActive={isActive({ accordion: 'student', url: 'settings' })} />
                    </Accordion>
                ) : undefined}
                {privileges?.admin ? (
                    <Accordion title="Admin Panel" path={path} accordion='admin' icon={<MdOutlineAdminPanelSettings />}>
                        <SidebarLink name="Courses" url="admin/courses" icon={<MdOutlineAdminPanelSettings />} isActive={isActive({ accordion: 'admin', url: 'courses' })} />
                        <SidebarLink name="Settings" url="admin/settings" icon={<BsGearFill />} isActive={isActive({ accordion: 'admin', url: 'settings' })} />
                    </Accordion>
                ) : undefined}
                {privileges?.teacher ? (
                    <Accordion title="Teacher Panel" path={path} accordion='teacher' icon={<SlBriefcase />}>
                        <SidebarLink name="Home" url="teacher/home" icon={<MdOutlineHome />} isActive={isActive({ url: 'teacher' })} />
                        <SidebarLink name="Courses" url="teacher/courses" icon={<SlBriefcase />} isActive={isActive({ url: 'teacher' })} />
                        <SidebarLink name="Settings" url="teacher/settings" icon={<BsGearFill />} isActive={isActive({ url: 'teacher' })} />
                    </Accordion>
                ) : undefined}
                {privileges?.student || privileges?.treasurer ? (<SidebarLink name="Fees" url="fees" icon={<RiCoinsLine />} isActive={isActive({ url: 'fees' })} />) : undefined}
                {privileges?.librarian ? (<SidebarLink name="Library" url="library" icon={<SlBookOpen />} isActive={isActive({ url: 'library' })} />) : undefined}

            </ul>
        </nav>
    )
}

export default Sidebar