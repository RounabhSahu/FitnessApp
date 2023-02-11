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
        number: null,
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
        else if (formData.address === '') {
            setWarning("Address is Empty");
        }
        else{
            setWarning("Submitted Successfully");
            await setDoc(doc(db,'members',formData.email),formData).then(()=>{
                console.log("Document successfully written!");
            });


        }

    };

    const forwardMembers= () => {
        navigate('/Members')
    }
    return (
        <div className="p-0 m-0 w-full h-screen bg-center bg-fixed bg-no-repeat bg-cover bg-gradient-to-b from-orange-600/80 to-purple-700 flex flex-col items-center justify-center">
            <h1 className="text-3xl text-center mb-4">
                <span className="text-white">Fitness Club Registration</span>
            </h1>
            <form
                className="mx-auto bg-white p-8 rounded-lg shadow-xl w-1/3 h-[600px] min-w-fit pt-24"
                onSubmit={handleSubmit}>
                <label className="block text-gray-700 font-bold mb-2">
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
                <label className="block text-gray-700 font-bold mb-2">
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
                <div className="flex items-center justify-center mt-8">
                <button
                    className="mx-auto bg-blue-800 rounded-md hover:bg-gray-700 text-white font-bold py-2 px-4 transition-colors duration-300 ease-in-out hover:shadow-md focus:outline-none focus:shadow-outline"
                    type="submit">Submit</button>
                </div>
                <span>{warning}</span>
            </form>
            <div className="flex items-center justify-center">
            <button
                className="mx-auto mt-4 bg-blue-800 hover:bg-gray-700 text-white text-3xl font-bold py-4 px-8 rounded-md transition-colors duration-300 ease-in-out hover:shadow-md focus:outline-none focus:shadow-outline"
                onClick={()=>forwardMembers()}>Member list</button>
            </div>
        </div>
    );
};

export default Form;
