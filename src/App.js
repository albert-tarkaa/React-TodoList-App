import './App.css';
import TodoListForm from './components/TodoListForm';
import TodoListItem from './components/TodoListItem';

function App() {
  const items = [
    {
      id: 1,
      name: 'home',
      completed: false,
    },
    {
      id: 2,
      name: 'work',
      completed: true,
    },
    {
      id: 3,
      name: 'school',
      completed: false,
    },
    {
      id: 4,
      name: 'school',
      completed: true,
    },
  ];

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Todo List</p>
      </header>
      <TodoListForm />
      <TodoListItem todoitems={items} />
    </div>
  );
}

export default App;
