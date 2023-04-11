import React, { useState } from 'react';
import MyForm from '../components/MyForm';

export default function ToDoDisplay() {
    const [toDos, setToDos] = useState([]);

    function addTask(task) {
    setToDos((prevToDos) => [...prevToDos, task]);
    }

    return (
        <div className="row bg-warning-subtle p-5">
            <div className="col">
            <MyForm onSubmit={addTask} />
            <ul className="list-group">
                {toDos.map((task, index) => (
                    <li className="list-group-item list-group-item-info" key={index}>{task.task}</li>
                ))}
            </ul>
            </div>
        </div>
    );
}
