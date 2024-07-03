import React from 'react'
import UserItem from './UserItem'

const UserList = () => {

    const items = [
      { id: 1,
      title: "Book",
      description: "A good book"},
      {id: 2,
      title: "Notebook",
      description: "A good Notebook"},
      {id: 3,
      title: "Pen",
      description: "A good Pen"}
    ];
    console.log(items)
    if (  items.length === 0 ){
        return <p> There are no items </p>
    } 
  return (
    <div>
      { items.map((item)=>{
        return(
        <UserItem key={item.id} id={item.id} title={item.title} description={item.description}/>)
      })}
    </div>
  )
}

export default UserList
