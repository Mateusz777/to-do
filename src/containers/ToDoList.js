import React, { Component } from 'react';
import ToDoItem from './../components/ToDoItem';
import NewToDoForm from './../components/NewToDoForm';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 400px;
    margin: 0 auto;
    background: #5D4037;
    border-radius: 10px;
    padding: 10px;
    width: 80%;
    margin-top: 20px;
`

const DestroyButton = styled.button`
    margin-bottom: 10px;
    border: none;
    padding: 5px;
    background: red;
    border-radius: 6px;
`

class ToDoList extends Component {
    static defaultProps = {
        done: false,
        tasks: [],
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

    removeTasks = () => {
        this.setState({
            tasks: []
        })
    }

    render() {
        const {title} = this.props;
        const {draft, tasks} = this.state;

        return (
            <Container>
               <h1>{title}</h1>
               <DestroyButton onClick={this.removeTasks}>Remove all</DestroyButton>
               {tasks.map(task =>
                   <ToDoItem text={task.text} done={task.done}/>
               )}
               <NewToDoForm
                    onSubmit={this.addTask}
                    onChange={this.updateDraft}
                    draft={draft}
               />
            </Container>

        )
    }
}

export default ToDoList;
