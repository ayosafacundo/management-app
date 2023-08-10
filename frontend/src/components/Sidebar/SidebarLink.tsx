import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface SidebarLinkInput {
    name: string,
    url: string,
    icon: React.ReactElement,
    isActive: Boolean
}

function SidebarLink({ name, url, icon, isActive }: SidebarLinkInput): React.ReactElement {

    const { state } = useLocation();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${state.id}/${url}`, {
            replace: false,
            state: state
        })
    }
    return (
        <li className={isActive ? 'active link' : 'link'} onClick={handleClick}>{icon} {name}</li>
    )
}

export default SidebarLink