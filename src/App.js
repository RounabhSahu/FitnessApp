import React from 'react';
import {Route, Routes} from "react-router-dom";
import Form from "./Components/Form";
import Members from "./Components/Members";
const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Form/>} />
                <Route path="/Members" element={<Members/>} />
            </Routes>
        </div>
    );
};

export default App;
