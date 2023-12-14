import { useRef, useState } from 'react';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import { useLocalStorage } from './hook/useLocalStorage';
import IconButton from './IconButton';
import FilterButton from './FilterButton';

function TodoMain() {
  const inputVal = useRef();
  const [todo, setTodo] = useLocalStorage([], 'todos');
  const [editId, setEditId] = useState(null);
  const [filterId, setFilterId] = useState('all');

  function addTodo(e) {
    e.preventDefault();

    if (!inputVal.current.value) return;

    // creating todo
    const newTodo = {
      task: inputVal.current.value,
      id: crypto.randomUUID(),
      finished: false,
    };

    setTodo((prev) => [...prev, newTodo]);

    // editing todo
    if (editId) {
      const updatedTodo = [...todo].map((todo) =>
        todo.id === editId
          ? (todo = { ...todo, task: inputVal.current.value })
          : todo,
      );
      setTodo(updatedTodo);
      setEditId(null);
    }

    inputVal.current.value = '';
  }

  function finishTodos(id) {
    setTodo((prev) =>
      [...prev].map((todo) =>
        todo.id === id ? { ...todo, finished: !todo.finished } : todo,
      ),
    );
  }

  function editTodos(id) {
    const editTodo = todo.find((todo) => todo.id === id);
    inputVal.current.value = editTodo.task;
    setEditId(id);
  }

  const deleteTodos = (id) =>
    setTodo([...todo].filter((todo) => todo.id !== id));

  const clearTodo = () => setTodo([]);

  const filteredTodo = todo.filter((todo) => {
    if (filterId === 'active') return !todo.finished;
    else if (filterId === 'completed') return todo.finished;
    else return todo;
  });

  return (
    <section className="absolute left-0 right-0 top-20 mx-auto w-1/2 p-8 text-white">
      <span className="text-4xl font-bold">T O D O</span>
      <div className="mt-2 flex w-full items-center gap-4 rounded-xl bg-[#24273d] p-6">
        <FaArrowRightToBracket />
        <form onSubmit={(e) => addTodo(e)}>
          <input
            type="text"
            placeholder="Add todo"
            className="bg-[#24273d] outline-none"
            ref={inputVal}
          />
        </form>
      </div>
      <div className="mt-2 flex flex-col items-center gap-4 rounded-xl bg-[#24273d] p-6 text-[#7a7ea3]">
        {todo.length !== 0 ? (
          filteredTodo.map((todo) => (
            <div
              className="flex w-full items-center justify-between border-b border-[#7a7ea3] py-2"
              key={todo.id}
            >
              <p className={`${todo.finished ? 'line-through' : null} text-lg`}>
                {todo.task}
              </p>
              <div className="flex gap-2">
                <IconButton
                  finishTodos={finishTodos}
                  editTodos={editTodos}
                  deleteTodos={deleteTodos}
                  todo={todo}
                />
              </div>
            </div>
          ))
        ) : (
          <p>Start by adding todos!</p>
        )}
        <div className="flex w-full justify-between text-xs font-bold">
          <p>
            <span className="text-purple-500">{todo.length}</span> todos
          </p>
          <div className="flex gap-2">
            <FilterButton setFilterId={setFilterId} />
          </div>
          <button onClick={clearTodo}>Clear todo list</button>
        </div>
      </div>
    </section>
  );
}

export default TodoMain;
