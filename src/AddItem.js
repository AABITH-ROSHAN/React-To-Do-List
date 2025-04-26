import React from 'react';
import { MdOutlineAddCircle } from "react-icons/md";
import { useRef } from 'react';


const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
const inputRef = useRef()
  return (
    <form className='additem' onSubmit={(event) => handleSubmit(event)}>
      <input 
        autoFocus
        ref={inputRef}
        type='text' 
        placeholder='Add Item' 
        required
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)}
      />
      <button 
        type="submit" 
        className="addbutton"
        onClick={()=>inputRef.current.focus()}>
        <MdOutlineAddCircle />
      </button>
    </form>
  );
};

export default AddItem;