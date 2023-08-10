import React from 'react'
import { useLocation } from 'react-router-dom'
import Admin from './dashboards/Admin';
import Student from './dashboards/Student';

function Dashboard() {

    const { state } = useLocation();

    const dashboards = {
        admin: <Admin />,
        student: <Student />
    }

    return dashboards[state.type];
}


export default Dashboard