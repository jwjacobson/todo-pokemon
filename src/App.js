import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MyForm from './components/MyForm';
import { Routes, Route } from 'react-router-dom';
import ToDoDisplay from './views/ToDoDisplay';
import PokemonData from './views/PokemonData';


function App() {
    const task = '';

    return (
        <div className="App">
        <Navbar />
        <div className="container">
            <Routes>
                <Route path='/' element={<ToDoDisplay task={task} />}/>
                <Route path='/pokemon' element={<PokemonData />}/>
            </Routes>
        </div>
        </div>
    );
}

export default App;