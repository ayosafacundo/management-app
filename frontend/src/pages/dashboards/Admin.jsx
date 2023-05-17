import React from "react"
import { useLocation } from "react-router-dom"
function Admin() {

    const { state } = useLocation();

    return (
        <main id="dashboard">
            <h1>Welcome {state.user}!</h1>
            <h2>This is your dashboard!</h2>
            <section>

            </section>

        </main>
    )
}
export default Admin