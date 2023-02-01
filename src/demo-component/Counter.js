import React, {useEffect, useReducer, useState} from "react";
import {myReducer} from "./commonUtil";
import CounterChild from "./CounterChild";

function Counter() {
    const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(myReducer, {count: 0});
    useEffect(() => {
        console.log('my count:' + count)
    }, [count])

    // const add = () => {
    //     const result = count + 1;
    //     setCount(result);
    // }
    const addDispatch = () => {
        dispatch({type: 'count'})
    }

    return <>
        <button onClick={addDispatch}>Add</button>
        <div><h2>Counter :</h2></div>
        <div>test: {state.count}</div>
        <CounterChild count={count}></CounterChild>
    </>
}

export default Counter;
