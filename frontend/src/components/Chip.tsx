import React from 'react'

interface ChipInput {
    icon: React.ReactElement,
    innertext: string,
    clickHandler: () => void
}

function Chip({ icon, innertext, clickHandler }: ChipInput): React.ReactElement {
    return (
        <div className="chip" onClick={clickHandler}>
            {icon}
            {innertext}
        </div>
    )
}

export default Chip