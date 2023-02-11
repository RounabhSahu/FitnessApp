import React from 'react';
import {Route, Routes} from "react-router-dom";
import Form from "./Components/Form";
import Members from "./Components/Members";
const App = () => {
    return (
        <div className="bg-cover bg-center bg-fixed bg-no-repeat bg-indigo-600">
            <Routes>
                <Route path="/" element={<Form/>} />
                <Route path="/Members" element={<Members/>} />
            </Routes>
        </div>
    );
};

export default App;
