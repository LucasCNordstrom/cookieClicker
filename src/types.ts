export type ShopAutoClicker = {
    autoClicker: AutoClicker,
    currentlyAcquired: number,
    buyClicker: () => void,
}

export type AutoClicker = {
    name: string,
    price: number,
    valueToIncrease: number,
}


export interface CurrentlyAcquiredAutoClicker extends AutoClicker {
    currentlyAcquired: number
}

export type Unlock = {
    nameOfRequiredClicker :string,
    numberOfClicker: number,
    clickerToUnlock: string
}
