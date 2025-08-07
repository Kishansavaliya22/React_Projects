import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { removeToDo, updateToDo } from "../features/todo/todoSlice";
import { useState, type ChangeEvent } from "react";

const ToDoItems = () => {
  const toDoList = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const [updatedToDoText, setUpdatedToDoText] = useState({ id: "", text: "" });

  const updateToDOTextHandler = (
    e: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    setUpdatedToDoText({ id: id, text: e.target.value });
  };

  const updateToDoHandler = (id: string) => {
    dispatch(updateToDo({ id: id, text: updatedToDoText.text }));
  };

  return (
    <>
      <h2 className="p-2 text-shadow-sm decoration-indigo-500/30">TODOS</h2>
      <ul>
        {toDoList.map((todo) => (
          <li key={todo.id}>
            <div
              className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black`}
            >
              <input type="checkbox" className="cursor-pointer" />
              <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg`}
                value={
                  todo.id == updatedToDoText.id
                    ? updatedToDoText.text
                    : todo.text
                }
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  updateToDOTextHandler(e, todo.id)
                }
              />
              {/* Edit, Save Button */}
              <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => updateToDoHandler(todo.id)}
              >
                📁
              </button>
              {/* Delete Todo Button */}
              <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => dispatch(removeToDo({ id: todo.id }))}
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoItems;
