import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Edit from "./components/Edit";
import Create from "./components/Create";
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<Table />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
     </Routes>
   </div>
 );
};
 
export default App;