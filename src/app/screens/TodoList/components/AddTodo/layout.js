import React from 'react';

export default function AddTodo({ onAddTodo }) {
  let input;

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        onAddTodo(input.value)
        input.value = ''
      }}
    >
      <input
        ref={node => {
          input = node
        }}
      />
      <button type="submit">
        Add Todo
      </button>
    </form>
  );
}
