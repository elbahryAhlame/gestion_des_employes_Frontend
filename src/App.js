import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AddEmployee from "./Employees/AddEmployee";
import EditEmployee from "./Employees/EditEmployee"
import ViewEmployee from "./Employees/ViewEmployees"
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      
    <Router>
      {/* navbar contient des lien pour cela on l'integre au sein de roter */}
    <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addEmployee" element={<AddEmployee />} />
          <Route exact path="/editEmployee/:id" element={<EditEmployee />} />
          <Route exact path="/viewEmployee/:id" element={<ViewEmployee />} />
        </Routes>
      </Router> 
         </div>
  );
}

export default App;
