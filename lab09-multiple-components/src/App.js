import React from "react"
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import Form from "./components/Form"
import Notes from "./components/Notes"

class App extends React.Component {

  state = {
    notes: [
      {
        'title':'Bitcoin crash after billionare makes careless remarks',
        'content':'Bitcoin crashed!!',
        'date': new Date()
      },
      {
        'title':'Found an interesting recipie for KFC',
        'content':'Put fried chicken into the rice cooker with rice',
        'date':new Date()
      }
    ],
    newTitle:"",
    newContent:"",
    newDate:""
  }

  updateFormField = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  
  addNewNote = (e) => {
    let newNote = {
      id: Math.floor(Math.random() * 10000 + 1000),
      content: this.state.newContent,
      title: this.state.newTitle,
      date: this.state.newDate
    }

    let cloned = [...this.state.notes, newNote];
    this.setState({
      'notes': cloned
    })
  }

  render() {
    return (
      <div className="container">

        <Form newTitle={this.state.newTitle} 
              newContent={this.state.newContent}
              newDate={this.state.newDate}
              updateFormField={this.updateFormField}
              addNewNote={this.addNewNote}
        />
        <Notes notes={this.state.notes}/>

      </div>
    );
  }
}

export default App;
