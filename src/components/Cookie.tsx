import React, {FC} from 'react';

type Cookie = {
    onClickFunction: () => void;
}
const Cookie: FC<Cookie> = ({onClickFunction}) => {
    return (
        <div>
            <button onClick={onClickFunction}>Click me</button>
        </div>
    );
};

export default Cookie;
