// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landing.jsx";
import SetupStore from "./components/setupStore.jsx";
import OwnerLogin from "./components/ownerLogin.jsx";

import Footer from './components/footer.jsx'
import CreateCatalog from './components/createCatalog.jsx'
import SellerDashboard from './components/SellerDashboard.jsx';

function App() {

  
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/setupStore" element={<SetupStore />} />
        <Route path="/ownerLogin" element={<OwnerLogin />} />
        <Route path="/SellerDashboard" element={<SellerDashboard/>}/>
      </Routes>
    </Router>
      {/* <CreateCatalog /> */}
      <Footer />
    </>
  )
}
export default App
