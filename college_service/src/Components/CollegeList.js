import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CollegeList.css';

function CollegeList() {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        loadColleges();
    }, []);

    const loadColleges = async () => {
        const result = await axios.get("http://localhost:8080/colleges");
        setColleges(result.data);
    };

    return (
        <div className="college-list">
            <h2>College List</h2>
            <Link to="/add-college" className="btn btn-primary">Add College</Link>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Accreditation</th>
                        <th>Established Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {colleges.map(college => (
                        <tr key={college.id}>
                            <td>{college.id}</td>
                            <td>{college.name}</td>
                            <td>{college.address}</td>
                            <td>{college.accreditation}</td>
                            <td>{college.establishedDate}</td>
                            <td>
                                <Link to={`/update-college/${college.id}`} className="btn btn-warning">Edit</Link>
                                <Link to={`/delete-college/${college.id}`} className="btn btn-danger">Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CollegeList;
