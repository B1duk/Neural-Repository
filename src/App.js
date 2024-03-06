import axios from "axios";
import { useEffect, useState } from "react";
import { NetworkList } from "./block/NetworkList";
import { NetworkPersonalCard } from "./pages/NetworkPersonalCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
function App() {
return (
  <div>
    <Header/>
    <Router>
      <Routes>
        
        <Route path="*" element={<NetworkList/>}/>
        <Route path="/NetworkPersonalCard/:id" element={<NetworkPersonalCard/>}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
