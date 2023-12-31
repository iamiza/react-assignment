import { useState } from 'react';


const ToDo = () => {
    const [name, setName] = useState('');
    const [lists, setLists] = useState([]);

    const del = (array,i) =>{
        array.splice(i,1);
        setLists([...lists])
    }
    
    return (
        <>
            <h1>Add ToDo</h1>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}>
            </input>
            <button onClick={() => {
                if (name !== ""){
                setLists([...lists, { name: name }]);
                setName("");}
                else
                {
                    alert("Cannot add an empty ToDo item")
                }
            }
            }>Add</button>
            
            <ul>
                {lists.map((list,index) => (
                    

                    <div>
                    {/* <input type="checkbox" ></input>    */}
                    <span>{list.name}</span>
                
                
                    <button onClick={()=> del(lists,index)} >Delete</button></div>
                ))
                }
                
            </ul>
        </>
    )
};



export default ToDo;
