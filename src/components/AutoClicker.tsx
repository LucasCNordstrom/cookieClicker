import React, {FC, useEffect} from 'react';

type AutoClicker = {
    intervalTime: number,
    nameOfClicker: string
    onClickFunction: () => void;
}
const AutoClicker: FC<AutoClicker> = ({onClickFunction, intervalTime, nameOfClicker}) => {

    useEffect(() => {
        const interval = setInterval(() => {
            onClickFunction();
        }, intervalTime);
        return () => {
            console.log('i closed it down');
            clearInterval(interval);
        }
    })
    return (
        <div>
            <h1>I am {nameOfClicker}</h1>
        </div>
    );
};

export default AutoClicker;
