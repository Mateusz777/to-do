import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    border: 2px solid #795548;
    background: #3E2723;
    border-radius: 10px;
    padding: 5px;
`

const Button = styled.button`
    background: #3E2723;
    border: none;
    width: 120px;
    height: 30px;
    font-size: 1.7em;
`

const TextInput = styled.input`
    width: 100%;
    border: none;
    margin-right: 10px;
    font-size: .7rem;
    padding: 5px;
    background: #3E2723;
    color: #EFEBE9;
`



const NewToDoForm = ({onChange, draft, onSubmit}) => {
    return (
        <Container>
            <TextInput onChange={onChange} type="text" value={draft} />
            <Button onClick={onSubmit}>+</Button>
        </Container>
    )
}

export default NewToDoForm;
