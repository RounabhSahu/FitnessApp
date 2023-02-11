import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {collection, getDocs ,setDoc,doc} from 'firebase/firestore';
import {db} from "../Firebase";

const Form = () => {
    const navigate=useNavigate();
    const [warning, setWarning] = useState('');
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
        if (formData.name === '') {
            setWarning("Name is Empty");
        }else if (formData.email === '') {
            setWarning("Email is Empty");
        }
        else if (formData.number.length < 10 || formData.number.length > 10) {
            setWarning("Phone number should be least 10 digits long");
        }
        else if (formData.address === '') {
            setWarning("Address is Empty");
        }
        else{
            await setDoc(doc(db,'members',formData.email),formData);
            setWarning("Submitted Successfully");
        }

    };

    const forwardMembers= () => {
        navigate('/Members')
    }
    return (
        <div className="p-0 m-0 w-full h-screen bg-center bg-fixed bg-no-repeat bg-cover bg-gradient-to-r from-indigo-600 to-purple-700">
            <h1 className="text-6xl font-bold text-white mx-auto text-center mb-4">
                <span className="text-gradient-primary">Fitness App</span>
            </h1>
            <form
                className="mx-auto bg-white p-8 rounded-lg shadow-xl w-1/2 min-w-fit"
                onSubmit={handleSubmit}>
                <label class="block text-gray-700 font-bold mb-2">
                    Name:
                    <input
                        className="w-full border border-gray-400 p-2 rounded-lg"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label class="block text-gray-700 font-bold mb-2">
                    Email:
                    <input
                        className="w-full border border-gray-400 p-2 rounded-lg"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label className="block text-gray-700 font-bold mb-2">
                    Phone Number:
                    <input
                        className="w-full border border-gray-400 p-2 rounded-lg"
                        type='number'
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label className="block text-gray-700 font-bold mb-2">
                    Address:
                    <input
                        className="w-full border border-gray-400 p-2 rounded-lg"
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <button
                    className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out hover:shadow-md focus:outline-none focus:shadow-outline"
                    type="submit">Submit</button>
                <span>{warning}</span>
            </form>
            <div className="flex items-center justify-center">
            <button
                className="mx-auto mt-4 bg-gray-800 hover:bg-gray-700 text-white text-3xl font-bold py-4 px-8 rounded-md transition-colors duration-300 ease-in-out hover:shadow-md focus:outline-none focus:shadow-outline"
                onClick={()=>forwardMembers()}>Member list</button>
            </div>
        </div>
    );
};

export default Form;
