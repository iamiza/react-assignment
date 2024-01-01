import { useState } from 'react';


const ToDo = () => {
    const [name, setName] = useState('');
    const [lists, setLists] = useState([]);
    const [check, setCheck] = useState(false)

    const del = (array,i) =>{
        array.splice(i,1);
        setLists([...lists])
    }

    const handelCheckBox = (e) => {
        const value = e.target.checked;
        setCheck(value);
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
                    <input type="checkbox" onChange={(e) => handelCheckBox(e)}></input>
                    <span style={{textDecoration : check ?"line-through":''}}>{list.name}</span>
                
                
                    <button onClick={()=> del(lists,index)} >Delete</button></div>
                ))
                }
                
            </ul>
        </>
    )
};



export default ToDo;
