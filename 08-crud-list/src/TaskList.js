import React from 'react';

export default class TaskList extends React.Component {
    state = {
        'tasks': [
            {
                'id': 1,
                'description': 'Walk the dog',
                'done': false
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
        ],
        'newTaskName': ''
    }

    renderTasks() {
        let taskJSX = [];
        for (let task of this.state.tasks) {
            taskJSX.push(
                <div className="card">
                    <div className="card-body">
                        <input type="checkbox" 
                        checked={task.done}
                        className="me-3"
                    />
                        {task.description}
                    </div>
                </div>
            )
        }
        return taskJSX;
    }

    updateTaskName = (event) => {
        this.setState({
            'newTaskName': event.target.value
        })
    }
    addTask = () => {
        // this.state.newTaskName contains the name of the new task

        let newTask = {
            'id': Math.floor(Math.random() * 10000 + 9999),
            'description': this.state.newTaskName,
            'done': false
        }

        // 1. clone the array
        let clone = this.state.tasks.slice();

        // 2. modify the cloned array
        clone.push(newTask);

        // 3. set the cloned array back into the state
        this.setState({
            'tasks': clone
        })
    }

    render() {
        return (
            <React.Fragment>
                {/*Form for the user to add a new task */}
                <h2>Add New Task</h2>
                <div>

                    <label className="form-label">Task Description</label>
                    <input className="form-control"
                        type="text" name="newTaskName"
                        value={this.state.newTaskName}
                        onChange={this.updateTaskName} />
                </div>
                <button className="btn btn-primary mt-3 mb-3"
                    onClick={this.addTask}>Add</button>

                <h1>Task List</h1>
                {this.renderTasks()}



            </React.Fragment>

        )
    }
}

