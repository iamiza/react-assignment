import React, { useEffect, useState } from "react";

const NumberGuessingGame = (props) => {
    const [randomNumber, setRandomNumber] = useState();
    const [inputNumber, setInputNumber] = useState();
    const [message, setMessage] = useState("");

    useEffect(() => {
        //Set random number 
        const num = Math.round(Math.random(100) * 10);
        var x = parseInt(num)
        setRandomNumber(x);
        console.log(num)
    }, []);

    const handleInputChange = (e) => {
        setInputNumber(e.target.value)
    };

    useEffect(() => {
        checkNumber();
    }, [inputNumber]);

    const checkNumber = () => {

    if (!inputNumber) {
        setMessage(`not a valid number`)
    }
    else if (inputNumber === randomNumber) {
        setMessage(`Congratulations! You guessed the correct number.`);
    } else if (inputNumber < randomNumber) {
        setMessage('Too low. Try again!');
    } else {
        setMessage('Too high. Try again!');
    }



    };

    return (
        <div>
            <h4> Guess a number between 1 to 20</h4>
            <input
                type="number"
                min={0}
                max={20}
                value={inputNumber}
                onChange={handleInputChange}
            />
            <br />
            {message}
        </div>
    );
};

export default NumberGuessingGame;
