import React, { Component } from 'react';
import './App.css';
import ToDoList from './containers/ToDoList'

class App extends Component {
    myTasks = [
        {done: true, text: "wynieść smieci"},
        {text: "zrobić pranie"},
        {done: false, text: "wysmarkać nos"}
    ]

    render() {
        return (
            <div>
                <ToDoList title="my stuff" tasks={this.myTasks}/>
            </div>
        )
    }
}

export default App;