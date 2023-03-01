import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


function SidebarLink({ name, url, icon, isActive }) {

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