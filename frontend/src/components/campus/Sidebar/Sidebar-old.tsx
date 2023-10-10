import React from 'react';
import { useLocation } from 'react-router-dom';

import Accordion from './Accordion';
import SidebarLink from './SidebarLink';
import { privilege } from '../../../models/accounts.interface';

/* Icons */
import { SlScreenDesktop, SlGraduation, SlBookOpen, SlBriefcase } from 'react-icons/sl';
import { RiCoinsLine } from 'react-icons/ri';
import { MdOutlineAdminPanelSettings, MdOutlineHome } from 'react-icons/md';
import { BsGearFill } from 'react-icons/bs';
import { BiPaint } from 'react-icons/bi';
import { ImBooks } from 'react-icons/im';
import { AiOutlineBook } from 'react-icons/ai';

interface SidebarInput {
    privileges: privilege;
}

interface IPath { accordion: string, url: string }

function Sidebar({ privileges }: SidebarInput): React.ReactElement {

    const path = useLocation().pathname.split('/');
    const isActive = ({ accordion, url }: IPath): boolean => {
        if ((path[path.length - 2] === accordion || accordion === "*") && (path[path.length - 1] === url || url === "*")) {
            return true
        }
        return false;
    }

    return (
        <nav>
            <ul>
                <SidebarLink name="Dashboard" url="dashboard" icon={<SlScreenDesktop />} isActive={isActive({ accordion: '*', url: 'dashboard' })} />
                {privileges?.admin ? (
                    <Accordion title="Admin Panel" path={path} accordion='admin' icon={<MdOutlineAdminPanelSettings />}>
                        <SidebarLink name="Courses" url="admin/courses" icon={<MdOutlineAdminPanelSettings />} isActive={isActive({ accordion: 'admin', url: 'courses' })} />
                        <SidebarLink name="Settings" url="admin/settings" icon={<BsGearFill />} isActive={isActive({ accordion: 'admin', url: 'settings' })} />
                    </Accordion>
                ) : undefined}
                {privileges?.teacher ? (
                    <Accordion title="Teacher Panel" path={path} accordion='teacher' icon={<SlBriefcase />}>
                        <SidebarLink name="Home" url="teacher/home" icon={<MdOutlineHome />} isActive={isActive({ accordion: 'teacher', url: 'home' })} />
                        <SidebarLink name="Courses" url="teacher/courses" icon={<SlBriefcase />} isActive={isActive({ accordion: 'teacher', url: 'courses' })} />
                        <SidebarLink name="Settings" url="teacher/settings" icon={<BsGearFill />} isActive={isActive({ accordion: 'teacher', url: 'settings' })} />
                    </Accordion>
                ) : undefined}
                {privileges?.librarian ? (
                    <Accordion title="Librarian Panel" path={path} accordion='librarian' icon={<ImBooks />}>
                        <SidebarLink name="Home" url="librarian/home" icon={<MdOutlineHome />} isActive={isActive({ accordion: 'librarian', url: 'home' })} />
                        <SidebarLink name="books" url="librarian/books" icon={<AiOutlineBook />} isActive={isActive({ accordion: 'librarian', url: 'books' })} />
                        <SidebarLink name="Settings" url="librarian/settings" icon={<BsGearFill />} isActive={isActive({ accordion: 'librarian', url: 'settings' })} />
                    </Accordion>
                ) : undefined}
                {privileges?.student ? (
                    <Accordion title="Student Panel" path={path} accordion='student' icon={<SlGraduation />}>
                        <SidebarLink name="Home" url="student/home" icon={<MdOutlineHome />} isActive={isActive({ accordion: 'student', url: 'home' })} />
                        <SidebarLink name="Courses" url="student/courses" icon={<SlGraduation />} isActive={isActive({ accordion: 'student', url: 'courses' })} />
                        <SidebarLink name="Settings" url="student/settings" icon={<BsGearFill />} isActive={isActive({ accordion: 'student', url: 'settings' })} />
                    </Accordion>
                ) : undefined}
                {privileges?.student || privileges?.treasurer ? (<SidebarLink name="Fees" url="fees" icon={<RiCoinsLine />} isActive={isActive({ accordion: '*', url: 'fees' })} />) : undefined}
                {privileges?.librarian || privileges?.student ? (<SidebarLink name="Library" url="library" icon={<SlBookOpen />} isActive={isActive({ accordion: '*', url: 'library' })} />) : undefined}
                <SidebarLink name="Themes" url="themes" icon={<BiPaint />} isActive={isActive({ accordion: '*', url: 'theme' })} />
            </ul>
        </nav>
    )
}

export default Sidebar