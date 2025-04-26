import React from 'react'
import { FaTrash } from 'react-icons/fa6';

const Content = ({items,changechecked,deleteList}) => {
    
    return (
<main>
    {items.length > 0 ?(
            <ul className='listcontainer'>
                {items.map((items) => (
                <React.Fragment key={items.id}>
                    <div>
                        <li className="list" >
                            <input 
                                className='checkbox'
                                type="checkbox" 
                                onChange={() => changechecked(items.id)}
                                checked={items.checked}
                            />
                            <label 
                                className='words' 
                                style={items.checked ? { textDecoration: 'line-through' } : null}>
                                {items.item}
                            </label>
                            <FaTrash 
                                className='dustbin'
                                role="button"
                                onClick={() => deleteList(items.id)}
                            />
                        </li>
                    </div>
                    <hr />
                </React.Fragment>
                ))}
            </ul>) : (<h2>Your List Is Empty</h2>)}
</main>

    );
}


export default Content
