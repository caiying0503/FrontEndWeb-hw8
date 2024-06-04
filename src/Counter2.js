import React from 'react';
import {useSelector , useDispatch} from 'react-redux'
import {decrement , increment , incrementByAmount} from './counterSlice2';
import {useState} from 'react'

export function Counter2(){
    const count = useSelector((state) => state.counter2.value)
    const dispatch = useDispatch()
    const [incrementAmount , setIncrementAmount] = useState('2');

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment 2
                </button>
                <span>{count}</span>
                <button
                    aris-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement 2
                </button>
            </div>
            <div>
                <input
                    aria-label='Set increment amount'
                    value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                />
                <button
                    onClick={() =>
                        dispatch(incrementByAmount(Number(incrementAmount) || 0 ))
                    }
                >
                Add Amount
                </button>
            </div>
        </div>

    )
}