import React, {useEffect, useState} from 'react';
import '../App.css';

export const ButtonGroup2 = (props) => {
    const {themeColor} = useState(props)

    console.log("function : " + themeColor);

    useEffect(() => {
        console.log("here child: " + themeColor)
    }, [themeColor])

    return (
        <div>
            <div>
                <button style={{color: themeColor}} onClick={() => props.handleClick('red')}>red</button>
            </div>

            <div>
                <button style={{color: themeColor}} onClick={() => props.handleClick('green')}>green</button>
            </div>
        </div>
    );


}

