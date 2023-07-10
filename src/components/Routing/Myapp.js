import { Routes, Route } from "react-router-dom";
import Home from "./Navbar/Home";
import About from "./Navbar/About";
import Contact from "./Navbar/Contact";
import Gallery from "./Navbar/Gallery";
import ErrorPage from "./Navbar/ErrorPage";
import Navbar from "./Navbar/Navbar";
import Adress from "./Navbar/Adress";
import Details from "./Navbar/Details";
const Myapp = () => {
    return(
       
        <>
            <h1>Welcome to Myapp Component</h1>
            
            <Navbar/>
            <Routes>
                {/* <Route path="/" element={<Home/>}></Route> */}
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}>
                    <Route path="adress" element={<Adress/>}/>
                    <Route path="details" element={<Details/>}/>
                </Route>
                <Route path="/gallery" element={<Gallery/>}></Route>
                <Route path="*" element={<ErrorPage/>}></Route>
            </Routes>
           
        </>

    )
}
export default Myapp;