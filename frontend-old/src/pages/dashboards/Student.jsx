import React from "react"

function Student() {
    return (
        <main id="student">
            <section className="courses">
                <h2>Courses</h2>
                <div className="content">
                    <div className="course"></div>
                    <div className="course"></div>
                    <div className="course"></div>
                    <div className="course"></div>
                    <div className="course"></div>
                </div>
            </section>
            <section className="timetable">
                <h2>Today's Timetable</h2>
            </section>
            <section className="announcements">
                <h2>Announcements</h2>
            </section>
            <section className="feesannouncements">
                <h2>Upcoming Fees</h2>
            </section>
        </main>
    )
}
export default Student