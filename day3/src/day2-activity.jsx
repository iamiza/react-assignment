import React, {useState} from "react";

const Counter1 =() =>{
    const [count,setCount] = useState(0);
    const [buttonClick,setButtonClick] = useState(0);

    // const increment= (x) =>{
    //     setCount(count + x);
    //     setButtonClick(buttonClick +x);

        
    // }
    // const decrement = (y) =>{
    //     setCount(count - y);
    //     setButtonClick(buttonClick +1);


    // }
    // const clickCounter= (z) =>{
    //     setButtonClick(buttonClick + z);

    // }
    const handleClick = (step) => {
        setCount(count + step);
        setButtonClick(buttonClick + 1);
        
    }
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={()=>handleClick(1)} >Increment by 1 </button>
            <button onClick={()=>handleClick(-2)}>Decrement by 2 </button>
            <p>Button clicked: {buttonClick}</p>
        </div>

    )

}
export default Counter1;