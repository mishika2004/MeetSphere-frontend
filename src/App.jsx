import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { useState } from "react";
import './App.css'

function App () {
  const [searchTerm, setSearchTerm] = useState("");
  return(
    <div className="app-wrapper">
      <Header setSearchTerm = {setSearchTerm}/>
      
      <Home searchTerm={searchTerm}/>
      <Footer/>
    </div>
  )
}
export default App