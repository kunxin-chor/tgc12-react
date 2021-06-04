import React from 'react';

export default class TaskList extends React.Component {
    state = {
        'tasks':[
            {
                'id': 1,
                'description':'Walk the dog',
                'done':false
            },
            {
                'id': 2,
                'description': 'Wash the car',
                'done': false
            },
            {
                'id': 3,
                'description': 'Clean the room',
                'done': true
            }
        ]
    }

    renderTasks() {
        let taskJSX = [];
        for(let task of this.state.tasks) {
            taskJSX.push(
                <div className="card">
                    <div className="card-body">
                        {task.description}
                    </div>
                </div>
            )
        }
        return taskJSX;
    }

    render() {
        return (
            <React.Fragment>
                <h1>Task List</h1>
                {this.renderTasks()}
            </React.Fragment>

        )
    }
}

