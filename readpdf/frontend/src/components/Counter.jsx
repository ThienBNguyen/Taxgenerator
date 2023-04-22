import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Now your Redux store is connected to your React application.To access and manipulate the store's state, you can use the useSelector and useDispatch hooks from the 'react - redux' package inside your React components.
const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const increment = () => dispatch({ type: 'INCREMENT' });
    const decrement = () => dispatch({ type: 'DECREMENT' });

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;