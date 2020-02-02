import React, { Component } from 'react';
import './App.css';

class ToDoItem extends Component {
    state = {
        done: this.props.done
    }

    toggleDone = () => {
        this.setState({
            done: !this.state.done,
        })
    }

    render () {
        const {text} = this.props;
        return (
            <div onClick={this.toggleDone} className={this.state.done ? 'doneToDo' : ''}>
                <p>{text}</p>
            </div>
        )
    }
}

class ToDoList extends Component {

    state = {
        tasks: this.props.tasks,
        draft: '',
    }

    updateDraft = (event) => {
        this.setState({
            draft: event.target.value,
        })
    }

    addTask = () => {
        const {tasks, draft} = this.state;
        const list = tasks;
        list.push(draft);
        this.setState({
            tasks: list,
            draft: '',
        })
    }

    render() {
        const {title} = this.props;
        const {draft, tasks} = this.state;

        return (
            <div>
               <h1>{title}</h1>
               {tasks.map(task =>
                   <ToDoItem text={task.text} done={task.done}/>
               )}
               <input onChange={this.updateDraft} type="text" value={draft}/>
               <button onClick={this.addTask}>Add task</button>
            </div>

        )
    }
}


class App extends Component {
    myTasks = [
        {done: true, text: "wynieść smieci"},
        {done: false, text: "zrobić pranie"},
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