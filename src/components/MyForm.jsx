import React from 'react';

export default function MyForm({ onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries()); 

    onSubmit(formJson);

    form.reset();
  }

  return (
    <div className="my-3">
    <form className="text-center" method="post" onSubmit={handleSubmit}>
      <label>
        <h4 className="text text-warning-emphasis">Enter Task:</h4>
        <input name="task" required />
      </label>
      <div>
      <button className="btn btn-outline-success mt-3" type="submit">Add Task To List</button>
      </div>
    </form>
    </div>
  );
}
