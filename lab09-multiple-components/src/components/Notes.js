import React from "react"


function renderNotes(notes) {
    let jsx = [];
    for (let n of notes) {
        jsx.push(<React.Fragment>

            <div class="card">
                <div class="card-title">{n.title}</div>
                <div class="card-body">
                    <p>{n.content}</p>
                    <p>Date:{n.date.toString()}</p>
                </div>
            </div>
        </React.Fragment>)
    }
    return jsx;
}

export default function Notes(props) {
    return <React.Fragment>
        <h1>Notes</h1>
        {renderNotes(props.notes)}
    </React.Fragment>


}