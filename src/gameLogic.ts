import {CurrentlyAcquiredAutoClicker, Unlock} from "./types";
import {unlockANewClickerFromDatabase} from "./availableClickers";

/**
 * Rounds number to better looking strings
 *
 * @param currentNumber - The number to change
 * @returns The number rounded to two decimals and adding a K-M-B depending on size
 *
 */
export function reduceNumberToString(currentNumber: number): string {
    if (currentNumber < 1 || currentNumber < 1000) {
        return currentNumber.toFixed(2);
    }
    if (currentNumber < 1000000) {
        let newNum = (currentNumber/1000).toFixed(2);
        return `${newNum} K`;
    }

    if (currentNumber < 1000000000) {
        let newNum = (currentNumber/1000000).toFixed(2);
        return `${newNum} M`;
    }

    if (currentNumber < 1000000000000) {
        let newNum = (currentNumber/1000000000).toFixed(2);
        return `${newNum} B`;
    }
    return currentNumber.toString();
}
/**
 * Returns the new state after a new autoClicker have been added.
 *
 * @param autoClickers - The state before the change
 * @param name - The name of the new autoClicker, this will be searched from the database
 * @returns The state of the Autoclickers after adding a new one
 *
 */
export function updateStateAfterBoughtAutoclicker(autoClickers: CurrentlyAcquiredAutoClicker[], name: string) {
    return autoClickers.map(clicker => {
        if (clicker.name !== name) return clicker;
        const newClicker = {
            ...clicker,
            name: name,
            currentlyAcquired: clicker.currentlyAcquired + 1,
            price: Math.round(clicker.price * 1.3 * 100) / 100
        }
        return newClicker;
    });
}

/**
 * Returns the new state after a new autoClicker has been unlocked
 *
 * @param autoClickers - The state before the change
 * @param unlock - The autoClickerUnlock which should be unlocked
 * @returns The state of the Autoclickers after unlocking a new one
 *
 */
export function tryUnlockNewClicker(currentState: CurrentlyAcquiredAutoClicker[], unlock: Unlock): CurrentlyAcquiredAutoClicker[] {
    let newState: CurrentlyAcquiredAutoClicker[] = currentState;
    const shouldUnlock = currentState.some(clicker =>
        clicker.name === unlock.nameOfRequiredClicker &&
        clicker.currentlyAcquired >= unlock.numberOfClicker);
    if (shouldUnlock) {
        const getNewClicker = unlockANewClickerFromDatabase(unlock.clickerToUnlock);
        newState = [...newState, getNewClicker]
    }
    return newState;
}
