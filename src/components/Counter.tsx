import React, {FC} from 'react';

type Counter = {
    currentCount: number
}
const Counter: FC<Counter> = ({currentCount}) => {

    return (
        <div>
            You have: {currentCount} cookies!!!
        </div>
    );
};

export default Counter;
