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
        'newTaskName': '',
        'taskBeingEdited': 0,
        'editedTaskName': ""
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
                            onChange={() => {
                                this.updateDoneElegant(task.id);
                            }}
                        />
                        {task.description}
                        <button onClick={() => {
                            this.handleEditTask(task.id, task.description)
                        }}>Edit</button>
                    </div>
                </div>
            )
        }
        return taskJSX;
    }

    handleEditTask = (taskId, description) => {
        this.setState({
            'taskBeingEdited': taskId,
            'editedTaskName': description
        })
    }

    // editTask = (taskId)=>{
    //     let modifiedIndex = this.state.tasks.findIndex(t => t.id === taskId);
    //     let originalTask = this.state.tasks[modifiedIndex];

    //     // ask the user for the new task name
    //     let newTaskName = prompt("Enter the new name for the task");

    //     let modifiedTask = {...originalTask, description:newTaskName }

    //     // clone the original task and modify it
    //     let clonedArray = [
    //                        ...this.state.tasks.slice(0, modifiedIndex),
    //                        modifiedTask,
    //                        ...this.state.tasks.slice(modifiedIndex+1)
    //                       ]

    //     this.setState({
    //         tasks: clonedArray
    //     })

    // }

    updateDoneStraightfoward = (taskId) => {

        // Find the task that we want to modify
        let wantedTask = null;
        for (let task of this.state.tasks) {
            if (task.id == taskId) {
                wantedTask = task;
                break;
            }
        }


        // MODIFY AN OBJECT 
        // clone the original object
        let clonedTask = { ...wantedTask };

        // invert the done property of the clonedTask object
        // if done was true, it will become false
        // if done was false, it will become true


        // make the change to the object
        clonedTask.done = !clonedTask.done;

        // same as:
        // if (clonedTask.done) {
        //
        // clonedTask.done = false;
        //} else{
        // clonedTask.done = true;    
        //}
        //

        // MODIFY THE TASK ARRAY
        // clone the array
        let cloned = this.state.tasks.slice();

        // change the array
        let indexToChange = this.state.tasks.findIndex(function (task) {
            return task.id == clonedTask.id;
        })
        // line 88 has side effects and is not recommended because
        // it mutates the cloned array directly
        // it's still OK because the cloned array is local to this function
        cloned[indexToChange] = clonedTask;

        // set cloned back into the state
        this.setState({
            'tasks': cloned
        })
    }

    updateDoneElegant = (taskId) => {
        let wantedTask = this.state.tasks.filter(function (task) {
            if (task.id == taskId) {
                return task;
            }
        })[0];

        let clonedTask = { ...wantedTask };
        clonedTask.done = !clonedTask.done;

        // clone the original tasks array, and put the clonedTask into
        // the position (i.e index) of the original task

        let wantedIndex = this.state.tasks.findIndex(function (task) {
            return task.id == taskId
        })

        let clonedArray = [
            ...this.state.tasks.slice(0, wantedIndex),
            clonedTask,
            ...this.state.tasks.slice(wantedIndex + 1)
        ]

        this.setState({
            'tasks': clonedArray
        })
    }

    updateDoneIntermediate = (taskId) => {
        let wantedTask = this.state.tasks.filter(task => task.id == taskId);

        let clonedTask = { ...wantedTask };
        clonedTask.done = !clonedTask.done;

        let clonedArray = this.state.tasks.map(function (eachTask) {
            if (eachTask.id != taskId) {
                return eachTask;
            } else {
                // if the id matches, then eachTask is the one that we want to modify
                return clonedTask
            }
        })

        this.setState({
            'tasks': clonedArray
        })
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

    processEditTask = () => {
        let originalTask = this.state.tasks.filter(t => t.id === this.state.taskBeingEdited)[0];
        let editedTask = {...originalTask, description: this.state.editedTaskName};
        let index = this.state.tasks.findIndex( t => t.id === this.state.taskBeingEdited);

        let clonedArray = [
            ...this.state.tasks.slice(0, index),
            editedTask,
            ...this.state.tasks.slice(index+1)
        ]

        this.setState({
            'tasks': clonedArray,
            'taskBeingEdited': 0,
            'editedTaskName': ''
        })
    }   

    updateFormField = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    renderEditPopup() {
        if (this.state.taskBeingEdited != 0) {
            let taskBeingEdited = this.state.tasks.filter(t => t.id === this.state.taskBeingEdited)[0];

            return (<React.Fragment>
                <div className="popup-background">
                <div className="modal" tabindex="-1" role="dialog" style={{ display: "block" }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Editing task: {taskBeingEdited.description}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Enter the new description for the task</p>
                                <input type="text" name="editedTaskName" onChange={this.updateFormField} value={this.state.editedTaskName}/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={this.processEditTask}>Save changes</button>
                                <button type="button" className="btn btn-secondary" onClick={()=>{
                                    this.setState({
                                        'taskBeingEdited': 0,
                                        'editedTaskName':""
                                    })
                                }}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </React.Fragment>)
        } else {
            return null;
        }

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


                {this.renderEditPopup()}


            </React.Fragment>

        )
    }
}

