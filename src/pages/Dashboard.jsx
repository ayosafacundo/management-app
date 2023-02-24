import React from 'react'
import { useLocation } from 'react-router-dom'

function Dashboard({ userid }) {

    const { state } = useLocation();
    console.log(state);

    return (
        <h1>This is the Dashboard!</h1>
    )
}



export default Dashboard