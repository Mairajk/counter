import { useState } from 'react'
import ThemeChanger from '../ThemeChanger';
import './style.css'



let Counter = () => {

    const [count, setCount] = useState(0);
    return (
        <div className='main'>

            <div className="header">
                <ThemeChanger />
                <h1>Counter</h1>
            </div>
            <div className='counterDiv'>
                <button className='sub'
                    onClick={() => {
                        setCount((count < 1) ? 0 : count - 1)
                    }}
                > - </button>

                <h2 className='counting'>{count}</h2>

                <button className='add'
                    onClick={() => {
                        setCount(count + 1)
                    }}
                > + </button>

            </div>

            <div className='resetDiv'>

                <button className='reset'
                    onClick={() => {
                        setCount(0)
                    }}
                > Reset </button>

            </div>
        </div>

    )
};


export default Counter;