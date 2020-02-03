import React, { Component } from 'react';
import styled from 'styled-components';

const Item = styled.div`
    background: #795548;
    margin-bottom: 10px;
    border-radius: 15px;
    padding: 14px;
    color: ${props => props.done ? '#8BC34A' : '#fff'};
    text-decoration: ${props => props.done ? 'line-through' : 'none'};
`

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
            <Item onClick={this.toggleDone} done={this.state.done}>
                {text}
            </Item>
        )
    }
}

export default ToDoItem;