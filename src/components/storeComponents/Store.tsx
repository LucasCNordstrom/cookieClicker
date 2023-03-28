import React, {FC, useState} from 'react';
import {Signal} from "@preact/signals-react";

import AutoClickerStoreItem from "./AutoClickerStoreItem";
import {CurrentlyAcquiredAutoClicker} from "../../types";

type Store = {
    allClickers: CurrentlyAcquiredAutoClicker[],
    buyNewClicker: (clickerName: string, clickerPrice : number) => void,
    currentMoney: Signal<number>
}

function f(something : any) {
    console.log('yeye i am here');
    return something;
}
const Store: FC<Store> = (props) => {
    function buyAutoClicker(price: number, valueToIncrease: number, name: string) {
        if (props.currentMoney.value < price) return;
        props.buyNewClicker(name, price);
    }

    return (
        <>
            <h1 className={'storeItemText'}>Store</h1>
            {props.allClickers.map(clicker =>
                <AutoClickerStoreItem autoClicker={clicker} currentlyAcquired={clicker.currentlyAcquired}
                                      buyClicker={() => buyAutoClicker(clicker.price, clicker.valueToIncrease, clicker.name)}
                                      key={clicker.name}/>
            )}
        </>
    );
};

export default Store;
