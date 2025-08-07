import { useState, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../features/todo/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddToDo = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch();
  const addToDoHandler = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addToDo({ id: nanoid(), text: input }));
    setInput("");
  };

  return (
    <form className="flex" onSubmit={(e) => addToDoHandler(e)}>
      <input
        type="text"
        placeholder="Write Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
};

export default AddToDo;
