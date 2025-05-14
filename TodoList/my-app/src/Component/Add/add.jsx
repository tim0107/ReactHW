import React, { useReducer, useState,useContext,useEffect  } from "react";
import './add.scss';
import { ThemeContext } from "../../context/themeContext";


const initValue = [];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.payload, isEditing: false }];
    case "remove":
      return state.filter(todo => todo.id !== action.payload);
    case "start_edit":
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, isEditing: true } : todo
      );
    case "save_edit":
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text, isEditing: false }
          : todo
      );
    default:
      return state;
  }
}

export default function Add() {
  const [state, dispatch] = useReducer(reducer, initValue);
  const [input, setInput] = useState('');
  const [editText, setEditText] = useState('');
  const { theme, toggleTheme } = useContext(ThemeContext);


  function addTodo(e) {
    e.preventDefault();
    if (input.trim()) {
      dispatch({ type: "add", payload: input });
      setInput('');
    }
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`main-container`}>
        <h1>{theme}</h1>
        <button onClick={toggleTheme}>Change Theme</button>
      <form  onSubmit={addTodo}>
        <input
            className="add"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New todo"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {state.map(todo => (
          <li key={todo.id}>
            {todo.isEditing ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  placeholder="Edit task"
                />
                <button
                  onClick={() => dispatch({ type: "save_edit", payload: { id: todo.id, text: editText } })}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                {todo.text}
                <button
                  onClick={() => {
                    setEditText(todo.text);
                    dispatch({ type: "start_edit", payload: todo.id });
                  }}
                >
                  Update
                </button>
              </>
            )}
            <button onClick={() => dispatch({ type: "remove", payload: todo.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
