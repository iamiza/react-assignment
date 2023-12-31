import React,  { useState } from "react";

const Display= ()=>{
    const [showTable, setShowTable] = useState(false);

    const data= [
        { category: "Fruits", price: "$1", stocked: "yes", name: "Apple" },
        { category: "Fruits", price: "$1", stocked: "yes", name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: "no", name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: "yes", name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: "no", name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: "yes", name: "Peas" }
    ];
    const displayData= ()=>{
        setShowTable(true);
    }
    const remove= ()=>{
      setShowTable(false);
  }
    return(
        <>
        <button onClick={displayData}>Click to Display</button>
        <button onClick={remove}>Click to Remove</button>

        { showTable ? (
            <table>
            <thead>
            <tr>
                <th>Category</th>
                <th>Price</th>
                <th>Stocked</th>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
            {data.map((row, index) => (
                <tr key={index}>
                <td>{row.name}</td>
                <td>{row.category}</td>
                <td>{row.price}</td>
                <td>{row.stocked}</td>
                </tr>
            ))}
            </tbody>
        </table>) : null
        }
    </>
    );


}

export default Display;