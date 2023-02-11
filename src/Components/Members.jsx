import React, {useEffect} from 'react';
import {collection, getDocs ,setDoc,doc} from 'firebase/firestore';
import {db} from "../Firebase";

const Members = () => {
    const ref=collection(db, 'members');
    const [members, setMembers] = React.useState([]);
    const [show, setShow] = React.useState(false);

    const getMembers=async()=> {
        const querySnapshot = await getDocs(ref).then((results) => {
            setMembers(results.docs.map(d=>[d.id,d.data()]).filter(m=>m[0]!=='empty'));
            setShow(true)
        }).catch((error) => {
            console.log(error)});

        console.log(members)
    }

    return (
        <div className="p-0 m-0 w-full h-screenbg-cover bg-center bg-fixed bg-no-repeat bg-indigo-600">
            These are members
            <br/>
            <button
                className="mx-auto mt-4 bg-gray-800 hover:bg-gray-700 text-white text-3xl font-bold py-4 px-8 rounded-md transition-colors duration-300 ease-in-out hover:shadow-md focus:outline-none focus:shadow-outline"
                onClick={()=>getMembers()}>get members</button>

            <table className="table-auto w-full text-left">
                <thead>
                <tr  className="bg-gray-800 text-white">
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Address</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Phone Number</th>
                </tr>
                </thead>
                <tbody>
                {show && members.map((m,index)=>{
                    return(
                        <tr key={index}  className="bg-gray-100">
                            <td key={index.toString()+'name'} className="border px-4 py-2">{m[1].name}</td>
                            <td key={index.toString()+'add'} className="border px-4 py-2">{m[1].address}</td>
                            <td key={index.toString()+'email'} className="border px-4 py-2">{m[1].email}</td>
                            <td key={index.toString()+'num'} className="border px-4 py-2">{m[1].number}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};

export default Members;
