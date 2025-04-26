import './App.css';
import { useState } from 'react';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  var [items,setItem] = useState(JSON.parse(localStorage.getItem('toDoList') || '[]'));

const [newItem,setNewItem]=useState('')

const addItem = (item)=>{
  const id = items.length ? items[items.length - 1].id +1 : 1; 
  const addnewItem ={id , checked: false , item}
  const listItem = [...items, addnewItem]
  setItem(listItem)
  localStorage.setItem("toDoList",JSON.stringify(listItem))
}


const handleSubmit = (event)=>{
  event.preventDefault()
  if(!newItem) return;
  addItem(newItem)
  console.log(newItem)
  setNewItem('')
}
const [search,setsearch] = useState('')


const changechecked=(id)=>{
const listItem =items.map((item)=>item.id===id ? {...item,checked:!item.checked}:item)
setItem(listItem)
localStorage.setItem("toDoList",JSON.stringify(listItem))
    } 
const deleteList=(id)=>{
const listItem = items.filter((item) => item.id !== id);
setItem(listItem)
localStorage.setItem("toDoList",JSON.stringify(listItem))
}

  return (
    <div className="App">
      <Header />
      <SearchItem 
        search={search}
        setsearch={setsearch}
      />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content 
        items={items.filter(item=>(item.item).toLowerCase().includes(search.toLowerCase()))}
        setItem={setItem}
        changechecked={changechecked}
        deleteList={deleteList}
      />
      <Footer 
      items={items}
      />
    </div>
  );
}

export default App;
