import React, { useState } from 'react';
import axios from 'axios';
import './AddCollege.css';

function AddCollege() {
    const [college, setCollege] = useState({
        name: '',
        address: '',
        accreditation: '',
        establishedDate: ''
    });

    const { name, address, accreditation, establishedDate } = college;

    const onInputChange = e => {
        setCollege({ ...college, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:8080/colleges", college);
        alert("College Added Successfully");
    };

    return (
        <div className="add-college">
            <h2>Add College</h2>
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
                <button type="submit">Add College</button>
            </form>
        </div>
    );
}

export default AddCollege;
