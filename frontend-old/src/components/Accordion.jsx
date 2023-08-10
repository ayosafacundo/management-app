import React, { useState } from 'react';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';


function Accordion({ title, icon, path, accordion, children }) {

    const [isHidden, setIsHidden] = useState(true);

    const clickHandler = (e) => {
        setIsHidden(!isHidden);
    }
    return (
        <li className={path.some(e => e === accordion) ? 'accordion active' : 'accordion'}>
            <button type='checkbox' onClick={clickHandler}><div>{icon}{title}</div>{isHidden ? (<GoTriangleDown />) : (<GoTriangleUp />)}</button>
            <ul className={isHidden ? 'accordion__content hidden' : 'accordion__content'}>
                {children}
            </ul>
        </li>
    )
}

export default Accordion