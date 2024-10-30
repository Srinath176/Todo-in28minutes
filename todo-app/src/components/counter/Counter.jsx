import { useState } from "react"
import './Counter.css';
import CounterButton from './CounterButton'


export default function Counter() {


    const [count, setCount] = useState(0)

    function IncrementParentCounterClick(by) {
        setCount(count + by)
    }

    function DecrementParentCounterClick(by) {
        setCount(count - by)
    }

    function ResetCounter(){
        setCount(0)
    }



    return (
        <div className="counterBox">
            <span className="count">{count}</span>
            <CounterButton by={1} incrementMethod={IncrementParentCounterClick} decrementMethod={DecrementParentCounterClick} />
            <CounterButton by={2} incrementMethod={IncrementParentCounterClick} decrementMethod={DecrementParentCounterClick} />
            <CounterButton by={5} incrementMethod={IncrementParentCounterClick} decrementMethod={DecrementParentCounterClick} />
            <button className="resetButton" onClick={ResetCounter}>Reset</button>
        </div>
    )
}



