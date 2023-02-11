import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {collection, getDocs ,setDoc,doc} from 'firebase/firestore';
import {db} from "../Firebase";

const Form = () => {
    const navigate=useNavigate();
    const ref=collection(db, 'members');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: 0,
        address:''
    });

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(formData);
        await setDoc(doc(db,'members',formData.email),formData);
    };

    const forwardMembers= () => {
        navigate('/Members')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Phone Number:
                    <input
                        type='number'
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
            <button
                onClick={()=>forwardMembers()}>Member list</button>
        </div>
    );
};

export default Form;
