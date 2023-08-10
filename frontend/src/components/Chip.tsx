import React from 'react'

interface ChipInput {
    icon: React.ReactElement,
    innertext: string,
    clickHandler: Function | undefined
}

function Chip({ icon, innertext, clickHandler }: ChipInput): React.ReactElement {
    return (
        <div className="chip" onClick={clickHandler ? clickHandler : undefined}>
            {icon}
            {innertext}
        </div>
    )
}

export default Chip