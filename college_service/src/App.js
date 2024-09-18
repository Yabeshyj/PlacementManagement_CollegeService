import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CollegeList from './Components/CollegeList';
import AddCollege from './Components/AddCollege';
import UpdateCollege from './Components/UpdateCollege';
import DeleteCollege from './Components/DeleteCollege';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Placement Management</h1>
                <Routes>
                    <Route path="/" element={<CollegeList />} />
                    <Route path="/add-college" element={<AddCollege />} />
                    <Route path="/update-college/:id" element={<UpdateCollege />} />
                    <Route path="/delete-college/:id" element={<DeleteCollege />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
