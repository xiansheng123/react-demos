import React, {useEffect, useReducer, useState} from "react";
import {myReducer} from "./commonUtil";

function CounterChild(props) {
    const {count}= props;
    console.log("child: " + count);
    const [childCount, setChildCount] = useState(0);

    useEffect(() => {
        console.log('my childCount:' + count)
    }, [count])

    // const add = () => {
    //     const result = childCount + 1;
    //     setCount(result);
    // }
    // const addDispatch = () => {
    //     dispatch({type: 'count'})
    // }

    return <>
        <div><h2>Child Counter :</h2></div>
        <div>test: {count}</div>
    </>
}

export default CounterChild;
