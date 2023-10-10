import React, { useState } from "react";
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';

interface AccordionInput {
    title: string,
    icon: React.ReactElement,
    path: string[],
    accordion: string,
    children: React.ReactElement | React.ReactElement[]
}

function Accordion({ title, icon, path, accordion, children }: AccordionInput): React.ReactElement {

    const [isHidden, setIsHidden] = useState(true);

    const clickHandler = () => {
        setIsHidden(!isHidden);
    }

    return (
        <li className={path.some(e => e === accordion) ? 'accordion active' : 'accordion'}>
            <input type='checkbox' onClick={clickHandler}><div>{icon}{title}</div>{isHidden ? (<GoTriangleDown />) : (<GoTriangleUp />)}</input>
            <ul className={isHidden ? 'accordion__content hidden' : 'accordion__content'}>
                {children}
            </ul>
        </li>
    )
}

export default Accordion