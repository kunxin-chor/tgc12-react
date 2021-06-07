import React from "react"

export default function Form(props) {
    return <React.Fragment>
        <h1>Add new note</h1>
        <div>
            <label className="form-label">Title</label>
            <input type="text"
                className="form-control"
                name="newTitle"
                value={props.newTitle}
                onChange={props.updateFormField}
            />
        </div>
        <div>
            <label className="form-label">Content</label>
            <textarea className="form-control" name="newContent" onChange={props.updateFormField}>
                {props.newContent}
            </textarea>
        </div>
        <div>
            <label className="form-label">Date</label>
            <input type='date' className="form-control"
                value={props.newDate}
                onChange={props.updateFormField}
                name="newDate" />
        </div>
        <button onClick={props.addNewNote}>Add Note</button>
    </React.Fragment>

}