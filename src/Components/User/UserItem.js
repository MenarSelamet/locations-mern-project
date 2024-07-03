import React from 'react'

const UserItem = ({id, title, description}) => {
  return (
    <div>
      <ul>
        <li>{id}</li>
        <li>{title}</li>
        <li>{description}</li>
      </ul>
    </div>
  );
}

export default UserItem
