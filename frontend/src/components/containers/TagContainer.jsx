import React from 'react'

function TagContainer({ children }) {
    return (
        <aside className='tags'>
            <h3>Search Bar</h3>
            <div className='input'> Input </div>
            <h5>Tags</h5>
            {children}
        </aside>
    )
}

export default TagContainer