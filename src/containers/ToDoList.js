import React, { Component } from 'react';
import ToDoItem from './../components/ToDoItem';
import NewToDoForm from './../components/NewToDoForm';

class ToDoList extends Component {
    static defaultProps = {
        done: false
    }

    state = {
        tasks: this.props.tasks,
        draft: '',
    }

    updateDraft = e => {
        this.setState({
            draft: e.target.value,
        })
    }

    addTask = () => {
        const {tasks, draft} = this.state;
        const list = tasks;
        list.push({text: draft, done: false});
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
               <NewToDoForm
                    onSubmit={this.addTask}
                    onChange={this.updateDraft}
                    draft={draft}
               />
            </div>

        )
    }
}

export default ToDoList;
