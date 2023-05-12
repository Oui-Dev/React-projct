import React from 'react';
import List from './pages/List';
import Detail from './pages/Detail';
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<List />} />
                <Route path="/:id" element={<Detail />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
}

export default App;
