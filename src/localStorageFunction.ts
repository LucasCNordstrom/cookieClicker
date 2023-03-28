import {CurrentlyAcquiredAutoClicker} from "./types";


const currentValueKey = 'currentValue';
const currentValuePerSecKey = 'valuePerSec';
const localAutoClickersKey = 'autoClickers';

export function updateLocalStorage(value: number, valuePerSec: number) {
    localStorage.setItem(currentValueKey, value.toString());
    localStorage.setItem(currentValuePerSecKey, valuePerSec.toString());
}

export function getCurrentValueFromLocalStorage(): number {
    const localCookies = localStorage.getItem(currentValueKey);
    if (localCookies) {
        return JSON.parse(localCookies);
    }
    return 0;
}

export function getCurrentValuePerSecFromLocalStorage(): number {
    const localValuePerSec = localStorage.getItem(currentValuePerSecKey);
    if (localValuePerSec) {
        return JSON.parse(localValuePerSec);
    }
    return 0;
}

export function setAutoClickersInStorage(autoClickers: any) {
    if (autoClickers) {
        localStorage.setItem(localAutoClickersKey, JSON.stringify(autoClickers));
    }
}

export function getAutoClickersFromLocalstorage(): CurrentlyAcquiredAutoClicker[] {
    const localAutoClickers = localStorage.getItem(localAutoClickersKey);
    if (localAutoClickers) {
        return JSON.parse(localAutoClickers);
    }
    return [];
}
