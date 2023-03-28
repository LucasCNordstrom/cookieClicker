import React, {FC, useEffect, useRef, useState} from 'react';

type Cookie = {
    onClickFunction: () => void
}
const Clicker: FC<Cookie> = ({onClickFunction}) => {

    // const [propCookies, setPropCookies] = useState(currentCount);
    //
    // const [saltPerSec, setSaltPerSec] = useState(currentSaltPerSec);


    // console.log('currentCount : ' + currentCount + ' - currentSaltPerSec : ' + currentSaltPerSec);
    function clickedButton(amount: number) {
        // if (amount < 1) {
        //     setPropCookies(prevState => prevState + currentSaltPerSec);
        // } else {
        //     setPropCookies(prevState => prevState + amount);
        // }
        onClickFunction();
    }

    useEffect(() => {
        const interval = setInterval(() => {
            // console.log(saltPerSec);
        }, 100);
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <div>
            <button onClick={() => clickedButton(1)} className={'cookieButton'}>Click me</button>
        </div>
    );
};

export default Clicker;
