import React, { useState } from 'react'

function Accordion({ title, icon, children }) {

    const [isHidden, setIsHidden] = useState(true);

    const clickHandler = (e) => {
        setIsHidden(!isHidden);
        e.stopImmediatePropagation();
    }

    return (<>

        <button className='accordion' onClick={clickHandler}>{icon}{title}</button>
        <ul className={isHidden ? 'accordion accordion__content hidden' : 'accordion accordion__content'}>
            {children}
        </ul>
    </>
    )
}

export default Accordion