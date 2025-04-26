import React from 'react'

const Footer = ({items}) => {
  return (
    <footer className='listlength'>
         {items.length}&nbsp;{items.length > 1 ? <p>List Items</p> : <p>List Item</p>}

    </footer>
  )
}

export default Footer
