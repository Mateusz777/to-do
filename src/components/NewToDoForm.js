import React from 'react';

const NewToDoForm = ({onChange, draft, onSubmit}) => {
    return (
        <div>
            <input onChange={onChange} type="text" value={draft} />
            <button onClick={onSubmit}>Add task</button>
        </div>
    )
}

export default NewToDoForm;
