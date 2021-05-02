import React from 'react';

const userOutput = (props) => {
    return (
        <>
            <h1>User can Change this</h1>
            <label>My Name is {props.username}</label>
        </>
    );
}

export default userOutput;