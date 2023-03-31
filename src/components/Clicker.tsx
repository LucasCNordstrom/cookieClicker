import React, {FC} from 'react';

type Cookie = {
    onClickFunction: () => void
}
const Clicker: FC<Cookie> = ({onClickFunction}) => {
    function clickedButton(amount: number) {
        onClickFunction();
    }

    return (
        <div>
            <button onClick={() => clickedButton(1)} className={'cookieButton'}>Shake Salt</button>
        </div>
    );
};

export default Clicker;
