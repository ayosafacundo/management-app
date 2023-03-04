import React from 'react'

function Chip({ icon, innertext, clickHandler }) {
    return (
        <div className="chip" onClick={clickHandler ? clickHandler : undefined}>
            {icon}
            {innertext}
        </div>
    )
}

export default Chip