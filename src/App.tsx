import './App.css'

import React, {FC, useEffect, useState} from 'react';
import Cookie from "./components/Cookie";
import AutoClicker from "./components/AutoClicker";
import autoClicker from "./components/AutoClicker";
import AddAutoClicker from "./components/AddAutoClicker";

const currentCookieKey = 'currentCookies';

type AutoClickerObject = {
    intervalTime: number,
    valueToIncrease: number,
    nameOfAutoClicker: string
}

const starterObjects: AutoClickerObject[] = [{
    intervalTime: 1000,
    nameOfAutoClicker: 'fast normal clicker',
    valueToIncrease: 1
}, {
    intervalTime: 1000,
    nameOfAutoClicker: 'slow big clicker',
    valueToIncrease: 5}]

type App = {}
const App: FC<App> = () => {
    const [cookieCount, setCookieCount] = useState(getFromLocalStorage());
    const [autoClickers, setAutoClickers] = useState<AutoClickerObject[]>(starterObjects);

    function clickedCookie(valueToIncrease: number) {
        setCookieCount(prev => prev + valueToIncrease);
    }

    function addAutoClicker(){
        setAutoClickers(prevState => [...prevState, {
            intervalTime: 1000,
            nameOfAutoClicker: 'a new AutoClicker',
            valueToIncrease: 1
        }]);
    }

    useEffect(() => {
        console.log('Saved to localstorage');
        updateLocalStorage(cookieCount);
    }, [cookieCount])

    return (
        <div className="App">
            <h1>Cookie Clicker</h1>
            <Cookie onClickFunction={() => clickedCookie(1)}/>
            <h4>You have: {cookieCount} cookies!!!</h4>
            {autoClickers.map(clicker => {
                return <AutoClicker nameOfClicker={clicker.nameOfAutoClicker} intervalTime={clicker.intervalTime}
                                    onClickFunction={() => clickedCookie(clicker.valueToIncrease)}/>
            })}
            <AddAutoClicker addClickerButton={() => addAutoClicker()}/>


            <button onClick={() => {setCookieCount(0)}}>Set my cookies to 0</button>
        </div>
    );
};

function updateLocalStorage(newCookies: number) {
    localStorage.setItem(currentCookieKey, newCookies.toString());
}

function getFromLocalStorage(): number {
    const localCookies = localStorage.getItem(currentCookieKey);
    if (localCookies) {
        return JSON.parse(localCookies);
    }
    return 0;
}


export default App;
