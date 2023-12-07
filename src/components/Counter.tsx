import React from 'react'

export const Counter = () => {
    const [count, setCount] = React.useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={increment}>incr{count}</button>
        </div>
    )
}

export default Counter