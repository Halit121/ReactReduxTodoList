import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { toogle, removeTodo } from "../Todos/TodosSlice";
const TodoList = () => {
  const items = useSelector((state) => state.todos.items);
  console.log(items);

const dispatch = useDispatch()

const handleRemoveTodo = (id)=> {
  if(window.confirm("Eminmisiniz")){
    dispatch(removeTodo(id))
  }
}




  return (
    <ul className="todo-list">
      {items.map((items, index) => (
        <li key={index} className={items.complated ? "completed" : ""}>
          <div className="view">
            <input className="toggle" type="checkbox" onChange={()=>dispatch(toogle({id:items.id}))} />
            <label>{items.title} </label>
            <button className="destroy" onClick={()=>handleRemoveTodo(items.id)}></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
