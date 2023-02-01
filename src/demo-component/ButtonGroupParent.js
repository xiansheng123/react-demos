import {ButtonGroup2} from "./ButtonGroup2";
import {useState} from "react";

export const ButtonGroupParent = () => {

    const [theme, setTheme] = useState({
        themeColor: "blue",
        btnId: 0
    });

    function handleClick(color) {
        console.log("app: " + color);
        const number = getRandomInt(0, 10000);
        setTheme({
                themeColor: color,
                btnId: number
            }
        )
    }

    return (
        <>
            <h1 style={{color: theme.themeColor}}> this my first second react</h1>
            {/*use key to render component everytime*/}
            <ButtonGroup2 key={theme.btnId} themeColor={theme.themeColor}
                          handleClick={(color) => handleClick(color)}/>
        </>
    );
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
