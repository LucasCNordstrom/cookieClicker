import React, {FC} from 'react';

type AddAutoClicker = {
    addClickerButton: () => void
}
const AddAutoClicker: FC<AddAutoClicker> = ({addClickerButton}) => {
    return (
        <div>
            <button onClick={addClickerButton}>Add a new AutoClicker</button>
        </div>
    );
};

export default AddAutoClicker;
