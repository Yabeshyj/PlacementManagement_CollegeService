import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateCollege.css';

function UpdateCollege() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [college, setCollege] = useState({
        name: '',
        address: '',
        accreditation: '',
        establishedDate: ''
    });

    useEffect(() => {
        loadCollege();
    }, []);

    const loadCollege = async () => {
        const result = await axios.get(`http://localhost:8080/colleges/${id}`);
        setCollege(result.data);
    };

    const { name, address, accreditation, establishedDate } = college;

    const onInputChange = e => {
        setCollege({ ...college, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/college/${id}`, college);
        alert("College Updated Successfully");
        navigate('/');
    };

    return (
        <div className="update-college">
            <h2>Update College</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" value={name} onChange={e => onInputChange(e)} required />
                </div>
                <div>
                    <label>Address: </label>
                    <input type="text" name="address" value={address} onChange={e => onInputChange(e)} required />
                </div>
                <div>
                    <label>Accreditation: </label>
                    <input type="text" name="accreditation" value={accreditation} onChange={e => onInputChange(e)} required />
                </div>
                <div>
                    <label>Established Date: </label>
                    <input type="date" name="establishedDate" value={establishedDate} onChange={e => onInputChange(e)} required />
                </div>
                <button type="submit">Update College</button>
            </form>
        </div>
    );
}

export default UpdateCollege;
