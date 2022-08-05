import React, { useState } from 'react';

const TodoListItem = (props) => {
  const [items, setItems] = useState(props.todoitems);

  const handleComplete = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  const handleEdit = () => {};
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <span className={item.completed === true ? 'strike' : ''}>
              {item.name}
            </span>
            <i
              className='fas fa-check'
              onClick={() => handleComplete(item.id)}
            ></i>
            <i
              className='fas fa-pen-to-square'
              onClick={() => handleEdit(item.id)}
            ></i>
            <i
              className='fas fa-trash-alt'
              onClick={() => handleDelete(item.id)}
            ></i>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoListItem;
