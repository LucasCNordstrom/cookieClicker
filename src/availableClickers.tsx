import {AutoClicker, CurrentlyAcquiredAutoClicker} from "./types";

export function getAllClickers(): CurrentlyAcquiredAutoClicker[] {
    return [{
        name: 'Small Salt shaker',
        price: 10,
        valueToIncrease: 1,
        currentlyAcquired: 0
    }, {
        name: 'Big Salt Shaker',
        price: 100,
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

//This is where we should continue, make the actual fetching 'real'
export function unlockANewClickerFromDatabase(name: string): CurrentlyAcquiredAutoClicker {
    console.log('We should now unlock ' + name);
    return {
        name: 'Big Salt Shaker',
        price: 100,
        valueToIncrease: 4,
        currentlyAcquired: 0
    }
}



