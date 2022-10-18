import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Education from "../pages/Education";
import Goals from "../pages/Goals";
import Interest from "../pages/Interest";

const NavPage = () => {
    return ( 
        <div>
            <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/education" element={<Education/>}/>
                <Route path="/interest" element={<Interest/>}/>
                <Route path="/goals" element={<Goals/>}/>
            </Routes>
        </div>
     );
}
 
export default NavPage;