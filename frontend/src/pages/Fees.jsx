import React from 'react'
import useThemeChanger from '../utils/useThemeChanger';

function Fees() {
    const [Theme, setTheme] = useThemeChanger();
    return (
        <main id="fees">
            <h1>Your current theme is {Theme}</h1>
            <button onClick={() => setTheme('light')}>Light Theme</button>
            <button onClick={() => setTheme('dark')}>Dark Theme</button>
            <button onClick={() => setTheme('phoenix')}>Phoenix</button>
            <button onClick={() => setTheme('darkPhoenix')}>Dark Phoenix</button>
            <button onClick={() => setTheme('windForce')}>Wind Force</button>
            <button onClick={() => setTheme('dragon')}>Dragon</button>
            <button onClick={() => setTheme('lightDragon')}>Light Dragon</button>
            <button onClick={() => setTheme('crimson')}>Crimson</button>
        </main>
    )
}

export default Fees