import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './DeleteCollege.css';

function DeleteCollege() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            deleteCollege();
        } else {
            alert("College ID is missing.");
            navigate('/');
        }
    }, []);
    
    const deleteCollege = async () => {
        try {
            await axios.delete(`http://localhost:8080/colleges/${id}`);
            alert("College Deleted Successfully");
            navigate('/');
        } catch (error) {
            console.error("Error deleting college:", error);
            if (error.response) {
                alert(`Failed to delete college: ${error.response.statusText}`);
            } else if (error.request) {
                alert("No response received from the server. Please try again.");
            } else {
                alert(`Error: ${error.message}`);
            }
        }
    };

    return (
        <div className="delete-college">
            <h2>Deleting College with ID: {id}</h2>
        </div>
    );
}

export default DeleteCollege;
