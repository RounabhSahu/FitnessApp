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
        <div>
            These are members
            <br/>
            <button onClick={()=>getMembers()}>get members</button>

            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
                </thead>
                <tbody>
                {show && members.map((m,index)=>{
                    return(
                        <tr key={index}>
                            <td key={index.toString()+'name'}>{m.name}</td>
                            <td key={index.toString()+'add'}>{m.address}</td>
                            <td key={index.toString()+'email'}>{m.email}</td>
                            <td key={index.toString()+'num'}>{m.number}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};

export default Members;
