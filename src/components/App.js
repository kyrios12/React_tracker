import React from "react";
import { Routes, Route } from "react-router-dom"; 
import AddAlbum from "./today/Home" ; 
import TopNav from "./today/TopNav";
import Weekly from "./week/Weekly";

function App() {
  return (
    <div className="App">
      <div className="Container">
      <TopNav /> {/* To display content at the top of navbar */}
        <Routes>
         <Route path="/" element={<AddAlbum />} />
         <Route path="/weekly" element={<Weekly />} />
        </Routes>
      </div>
     
    </div>
  );
}

export default App;