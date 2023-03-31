import React, {FC} from 'react';
import {ShopAutoClicker} from "../../types";
import {reduceNumberToString} from "../../gameLogic";

const AutoClickerStoreItem: FC<ShopAutoClicker> = (props) => {
    return (
        <>
            <h2>{props.autoClicker.name} - Price : {reduceNumberToString(props.autoClicker.price)} Grams</h2>
            <h3>Shakes / 10 seconds : {props.autoClicker.valueToIncrease}</h3>
            <h2>Currently acquired : {props.currentlyAcquired}</h2>
            <button onClick={props.buyClicker}>Buy</button>
        </>
    );
};

export default AutoClickerStoreItem;
