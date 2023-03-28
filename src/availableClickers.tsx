import {AutoClicker, CurrentlyAcquiredAutoClicker} from "./types";

export function getAllClickers(): CurrentlyAcquiredAutoClicker[] {
    return [{
        name: 'Small Salt shaker',
        price: 10,
        valueToIncrease: 1,
        currentlyAcquired: 0
    }, {
        name: 'Big Salt Shaker',
        price: 500,
        valueToIncrease: 4,
        currentlyAcquired: 0
    },
        {
            name: 'Super Big Salt shaker',
            price: 10000,
            valueToIncrease: 10,
            currentlyAcquired: 0
        }]
}


export function unlockANewClickerFromDatabase(name: string): CurrentlyAcquiredAutoClicker {
    return {
        name: 'Unlocked Salt shaker',
        price: 150,
        valueToIncrease: 3,
        currentlyAcquired: 0
    }
}



