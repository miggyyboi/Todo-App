import { FaCheck, FaPenToSquare, FaRegTrashCan } from 'react-icons/fa6';

function IconButton({ finishTodos, editTodos, deleteTodos, todo }) {
  const universalStyling = 'hover:scale-110 hover:text-purple-500';

  return (
    <>
      <button
        onClick={() => finishTodos(todo.id)}
        className={`${todo.finished ? 'text-purple-500' : null}`}
      >
        <FaCheck />
      </button>
      <button onClick={() => editTodos(todo.id)} className={universalStyling}>
        <FaPenToSquare />
      </button>
      <button onClick={() => deleteTodos(todo.id)} className={universalStyling}>
        <FaRegTrashCan />
      </button>
    </>
  );
}

export default IconButton;
