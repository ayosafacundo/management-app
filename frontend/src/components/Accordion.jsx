import React, { useState } from 'react'

function Accordion({ title, icon, children }) {

    const [isHidden, setIsHidden] = useState(true);

    const clickHandler = (e) => {
        setIsHidden(!isHidden);
        e.stopImmediatePropagation();
    }


    return (
        <li className='accordion active'>
            <button type='checkbox' onClick={clickHandler}>{icon}{title}</button>
            <ul className={isHidden ? 'accordion__content hidden' : 'accordion__content'}>
                {children}
            </ul>
        </li>
    )
}

export default Accordion