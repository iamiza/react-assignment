import { useState } from 'react';


const ArrayList = () => {
    const [name, setName] = useState('');
    const [lists, setLists] = useState([]);

    return (
        <>
            <h1>Add to a List</h1>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}>
            </input>
            <button onClick={() => {
                setLists([...lists, { name: name }])
            }
            }>Add</button>
            <ul>
                {lists.map((list,index) => (
                    <li key={index}>{list.name}</li>
                ))}
            </ul>
        </>
    )
};



export default ArrayList;
