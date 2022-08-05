import React from 'react';

const TodoListForm = () => {
  return (
    <div>
      <form onSubmit={() => {}}>
        <input type='text' value='' placeholder='enter a todo item' />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default TodoListForm;
