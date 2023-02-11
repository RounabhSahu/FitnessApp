import React, {useEffect} from 'react';
import {collection, getDocs ,setDoc,doc} from 'firebase/firestore';
import {db} from "../Firebase";

const Members = () => {
    const ref=collection(db, 'members');
    const [members, setMembers] = React.useState([]);
    const [show, setShow] = React.useState(false);
    useEffect(() => {
        getMembers(ref, members).then(() => {
            console.log("data fetched")
        })
    }, []);
    
    const getMembers=async()=> {
        const querySnapshot = await getDocs(ref).then((results) => {
            setMembers(results.docs.map(d=>[d.id,d.data()]).filter(m=>m[0]!=='empty'));
            setShow(true)
        }).catch((error) => {
            console.log(error)});

        console.log(members)
    }

    return (
        <div className="p-0 m-0 w-full h-screen bg-center bg-fixed bg-no-repeat bg-cover bg-gradient-to-b from-orange-600/80 to-purple-700 flex flex-col items-center justify-center">
            <br/>
                <h1 className="text-3xl text-center">
                    <span className="text-white">Fitness Club Registration</span>
                </h1>
            <table className="table-auto w-full text-left w-[800px] mx-8">
                <thead>
                <tr  className="bg-gray-800 text-white w-1/2">
                    <th className="px-4 py-2 w-fit">Name</th>
                    <th className="px-4 py-2 w-fit">Address</th>
                    <th className="px-4 py-2 w-fit">Email</th>
                    <th className="px-4 py-2 w-fit">Phone Number</th>
                </tr>
                </thead>
                <tbody>
                {show && members.map((m,index)=>{
                    return(
                        <tr key={index}  className="bg-gray-100 w-fit">
                            <td key={index.toString()+'name'} className="border px-4 py-2 w-fit">{m[1].name}</td>
                            <td key={index.toString()+'add'} className="border px-4 py-2 w-fit">{m[1].address}</td>
                            <td key={index.toString()+'email'} className="border px-4 py-2 w-fit">{m[1].email}</td>
                            <td key={index.toString()+'num'} className="border px-4 py-2 w-fit">{m[1].number}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};

export default Members;
