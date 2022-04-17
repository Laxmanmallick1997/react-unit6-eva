import {Route, Routes} from 'react-router-dom'
import {AddCountry} from "../components/AddCountry/addCountry"
import {AddCity} from "../components/AddCity/addCity"
import { Navbar } from "../components/Navbar/navbar";
import {Home} from "../components/Hompage/Homepage"
import {CityUpdate} from  "../components/update/cityupdate"

export const AllRoutes=()=>{
    return(
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route exact path="/add-country" element={<AddCountry/>}/>
                <Route exact path="/add-city" element={<AddCity/>}/>
                <Route path="/update/:id" element={<CityUpdate />} />
            </Routes>
        </div>
    )
}