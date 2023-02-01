import React, {useState} from 'react';
import '../App.css';

export const ButtonGroup2 = (props) => {
    const {themeColor} = useState(props)


    return (
        <div>
            <div>child button impact the parent style</div>
            <div>
                <button style={{color: themeColor}} onClick={() => props.handleClick('red')}>red</button>
            </div>

            <div>
                <button style={{color: themeColor}} onClick={() => props.handleClick('green')}>green</button>
            </div>

        </div>
    );


}

