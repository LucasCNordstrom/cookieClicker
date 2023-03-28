import './App.css'

import React, {FC, useEffect, useState} from 'react';
import {signal, effect} from '@preact/signals-react';
import Clicker from "./components/Clicker";
import Store from "./components/storeComponents/Store";
import {CurrentlyAcquiredAutoClicker} from "./types";
import {getAllClickers} from "./availableClickers";
import {reduceNumberToString, updateStateAfterBoughtAutoclicker} from "./gameLogic";
import {
    getAutoClickersFromLocalstorage,
    getCurrentValueFromLocalStorage,
    getCurrentValuePerSecFromLocalStorage, setAutoClickersInStorage, updateLocalStorage
} from "./localStorageFunction";


type App = {}

const currentValue = signal<number>(Number.parseFloat(getCurrentValueFromLocalStorage().toFixed()));
const saltPerSec = signal<number>(getCurrentValuePerSecFromLocalStorage());
const currentAutoClickers = signal<CurrentlyAcquiredAutoClicker[]>(getAutoClickersFromLocalstorage());

effect(() => {
    let saltPerSecond = 0;
    currentAutoClickers.value.forEach(clicker => saltPerSecond += clicker.valueToIncrease * 0.1 * clicker.currentlyAcquired);
    saltPerSec.value = saltPerSecond;
})

const App: FC<App> = () => {
    const [autoClickers, setAutoClickers] = useState<CurrentlyAcquiredAutoClicker[]>(currentAutoClickers.value);

    function buyNewAutoClicker(name: string, price: number) {

        if (!currentAutoClickers.value.some(clicker => clicker.name === name)) {
            console.log('adding a new one')
            currentAutoClickers.value = [...currentAutoClickers.value, getAllClickers().find(click => click.name === name)!];
        }
        const newStateOfClickers = updateStateAfterBoughtAutoclicker(currentAutoClickers.value, name);

        currentAutoClickers.value = newStateOfClickers;
        setAutoClickers(currentAutoClickers.value);
        currentValue.value -= price;
    }

    function getClickersAvailable() {
        if (autoClickers.length > 0) {
            return autoClickers;
        }
        return getAllClickers();
    }

    useEffect(() => {
        setAutoClickersInStorage(currentAutoClickers.value);

        const interval = setInterval(() => {
            currentValue.value = Number.parseFloat((currentValue.value + saltPerSec.value).toFixed(1));
            updateLocalStorage(currentValue.value, saltPerSec.value);
        }, 100);
        return (() => {
            clearInterval(interval);
        })
    }, [autoClickers])


    return (
        <div className="App">
            <header>
                <h1 className={'title'}>Salt Shaker</h1>
            </header>
            <section className={'gameSection'}>
                <section className={'cookieSection'}>
                    <h3>Grams of Salt : {currentValue} </h3>
                    <Clicker onClickFunction={() => {
                        currentValue.value++;
                    }}/>
                    <h4>Grams per second : {reduceNumberToString(saltPerSec.value)}</h4>
                </section>
                <section className={'storeSection'}>
                    <Store allClickers={getClickersAvailable()} currentMoney={currentValue}
                           buyNewClicker={buyNewAutoClicker}/>
                    <button onClick={() => {
                        currentAutoClickers.value = [];
                        setAutoClickers([])
                        currentValue.value = 0;
                    }}>Reset my cookies to 0
                    </button>
                    <br/>
                </section>
            </section>
        </div>

    );
};

export default App;
