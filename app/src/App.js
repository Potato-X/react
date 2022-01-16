import "./App.css";
import Home from "./page/Home";
import Login from "@/page/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  function exchange(){
    console.log(1)
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/login" element={<Login></Login>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
