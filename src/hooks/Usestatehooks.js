import React from 'react'
import { useState,useEffect,useContext} from 'react';
import {UserContext} from './useContexthooks';

function Usestatehooks() {
    const [age,setAge] = useState("40");
    const [color,setColor] = useState("red");
    const [text, setText] = useState("Hello");

    const [count,setCount] = useState(0);
    const [calculate, calculateCount] = useState(0);

    const [data, setData] = useState();

    useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/todos")
       .then((res) => res.json())
       .then((data) => setData(data));
    }, []);
    function handleClick(){
        setColor('black');
    }

    function handleTextChange(e){
        setText(e.target.value);
    }

    function handleReset(){
        setText('Hello');
    }

    useEffect(() => {
        calculateCount(() => count * 2)
    }, [count]);

    const user = useContext(UserContext)
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <h1 className='my-4'>Custom Hooks Example</h1>
                <div className='my-3'>
                    {/* {data && data.map((item) => {
                    return <p key={item.id}><span>{item.id}</span>----{item.title}</p>;
                    })} */}
                </div>
                <h2>{`Hello ${user} in different file!`} ==========</h2>
                <button onClick={()=> setAge("45")}>Click for Age</button>
                <p>My age is {age}</p>

                <div className='box' style={{backgroundColor: {color}}}>
                    <p>Hi There {color}</p>
                </div>
                <p>Hi There {color}</p>
                <button onClick={() => handleClick()}>Click for change box bg color</button>
                <div className='col-12 mt-3'>
                    <input type="text" value={text} onChange={handleTextChange} />
                    <p>Text is {text}</p>
                    <button onClick={() => handleReset()}>Reset Value</button>
                </div>


                <div className='col-12 mt-2'>
                    <p>Total count is {count}</p>
                    <button onClick={() => setCount((count + 1))}>Total Count</button>
                    <p>calculatation {calculate}</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Usestatehooks