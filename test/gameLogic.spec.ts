import {CurrentlyAcquiredAutoClicker, Unlock} from "../src/types";
import {reduceNumberToString, tryUnlockNewClicker, updateStateAfterBoughtAutoclicker} from "../src/gameLogic";

describe("updateStateAfterBoughtAutoclicker", () => {
    const oldState: CurrentlyAcquiredAutoClicker[] = [{
        currentlyAcquired: 1,
        name: 'someCool name',
        price: 10,
        valueToIncrease: 1
    },
        {
            currentlyAcquired: 1,
            name: 'some other cool name',
            price: 10,
            valueToIncrease: 1
        },
        {
            currentlyAcquired: 1,
            name: 'some not so cool name',
            price: 10,
            valueToIncrease: 1
        }]
    it("should increase currentlyAcquired and Price", () => {
        const newState: CurrentlyAcquiredAutoClicker[] = updateStateAfterBoughtAutoclicker(oldState, 'someCool name');
        expect(newState[0].currentlyAcquired).toEqual(2);
        expect(newState[0].price).toEqual(13);
    });
    it("should increase currentlyAcquired and Price two times", () => {
        const newState: CurrentlyAcquiredAutoClicker[] = updateStateAfterBoughtAutoclicker(oldState, 'someCool name');
        const evenNewerState: CurrentlyAcquiredAutoClicker[] = updateStateAfterBoughtAutoclicker(newState, 'someCool name');

        expect(evenNewerState[0].currentlyAcquired).toEqual(3);
        expect(evenNewerState[0].price).toEqual(16.9);
    });
    it("should increase currentlyAcquired and Price consequently three times", () => {
        const newState: CurrentlyAcquiredAutoClicker[] = updateStateAfterBoughtAutoclicker(oldState, 'someCool name');
        const evenNewerState: CurrentlyAcquiredAutoClicker[] = updateStateAfterBoughtAutoclicker(newState, 'someCool name');
        const theNewestState: CurrentlyAcquiredAutoClicker[] = updateStateAfterBoughtAutoclicker(evenNewerState, 'someCool name');


        expect(theNewestState[0].currentlyAcquired).toEqual(4);
        expect(theNewestState[0].price).toEqual(21.97);
    });
    it("should not have to many decimals", () => {
        const oldState: CurrentlyAcquiredAutoClicker[] = [{
            currentlyAcquired: 1,
            name: 'very specific price',
            price: 92.65,
            valueToIncrease: 1
        }]
        const newState: CurrentlyAcquiredAutoClicker[] = updateStateAfterBoughtAutoclicker(oldState, 'very specific price');
        expect(newState[0].price).toEqual(120.45);
    });
});

describe('make large numbers prettier', () => {
    it('should turn 0.68686997 to 0.69', function () {
        const initialValue = 0.68686997;
        const result: string = reduceNumberToString(initialValue);
        expect(result).toEqual('0.69')
    });
    it('should turn 0.68186997 to 0.68', function () {
        const initialValue = 0.68186997;
        const result: string = reduceNumberToString(initialValue);
        expect(result).toEqual('0.68')
    });
    it('should turn 15.686997 to 15.69', function () {
        const initialValue = 15.686997;
        const result: string = reduceNumberToString(initialValue);
        expect(result).toEqual('15.69')
    });
    it('should turn 10000 to 10.00 K', function () {
        const initialValue = 10000;
        const result: string = reduceNumberToString(initialValue);
        expect(result).toEqual('10.00 K')
    });
    it('should turn 19600 to 19.60 K', function () {
        const initialValue = 19600;
        const result: string = reduceNumberToString(initialValue);
        expect(result).toEqual('19.60 K')
    });
    it('should turn 3787.589999999764 to 3.79 K', function () {
        const initialValue = 3787.589999999764;
        const result: string = reduceNumberToString(initialValue);
        expect(result).toEqual('3.79 K')
    });
    it('should turn 1000000 to 1.00 M', function () {
        const initialValue = 1000000;
        const result: string = reduceNumberToString(initialValue);
        expect(result).toEqual('1.00 M')
    });

    it('should turn 1500000 to 1.50 M', function () {
        const initialValue = 1500000;
        const result: string = reduceNumberToString(initialValue);
        expect(result).toEqual('1.50 M')
    });
    it('should turn 1514851 to 1.51 M', function () {
        const initialValue = 1514851;
        const result: string = reduceNumberToString(initialValue);
        expect(result).toEqual('1.51 M')
    });
    it('should turn 1514851123 to 1.51 B', function () {
        const initialValue = 1514851123;
        const result: string = reduceNumberToString(initialValue);
        expect(result).toEqual('1.51 B')
    });
    it('should turn 9199999999 to 9.20 B', function () {
        const initialValue = 9199999999;
        const result: string = reduceNumberToString(initialValue);
        expect(result).toEqual('9.20 B')
    });
    it('should turn 9919999999 to 9.92 B', function () {
        const initialValue = 9919999999;
        const result: string = reduceNumberToString(initialValue);
        expect(result).toEqual('9.92 B')
    });
});

describe('should get new clickers available', function () {
    const initialState = [{}]
});

describe('unlocks clickers', function () {
    let unlockedClickers: CurrentlyAcquiredAutoClicker[];
    let unlock: Unlock = {
        nameOfRequiredClicker: 'someCool name',
        clickerToUnlock: 'Unlocked Salt shaker',
        numberOfClicker: 5
    }
    beforeEach(() => {
        unlockedClickers = [{
            currentlyAcquired: 5,
            name: 'someCool name',
            price: 10,
            valueToIncrease: 1
        },]
        unlock = {
            nameOfRequiredClicker: 'someCool name',
            clickerToUnlock: 'Unlocked Salt shaker',
            numberOfClicker: 5
        }
    })
    it('should unlock a new clicker', function () {
        const expectedState: CurrentlyAcquiredAutoClicker[] = [{
            currentlyAcquired: 5,
            name: 'someCool name',
            price: 10,
            valueToIncrease: 1
        },
            {
                name: 'Unlocked Salt shaker',
                price: 150,
                valueToIncrease: 3,
                currentlyAcquired: 0
            }];

        const updatedState = tryUnlockNewClicker(unlockedClickers, unlock);
        expect(updatedState).toEqual(expectedState);
    });
    it('should unlock a new clicker in another way', function () {
        const expectedState: CurrentlyAcquiredAutoClicker[] = [{
            currentlyAcquired: 5,
            name: 'someCool name',
            price: 10,
            valueToIncrease: 1
        },
            {
                name: 'Unlocked Salt shaker',
                price: 150,
                valueToIncrease: 3,
                currentlyAcquired: 0
            }];

    });
});


