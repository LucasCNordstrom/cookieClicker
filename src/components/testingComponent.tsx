import React, {FC, useReducer, useState} from 'react';
import {initialState, reducer} from "../reducer";

type TestingComponent = {}


const TestingComponent: FC<TestingComponent> = () => {
    const [state, setState] = useReducer(reducer, initialState);

    return (
        <div>
            <button onClick={() => console.log('yeet')}></button>
        </div>
    );
};

export default TestingComponent;
