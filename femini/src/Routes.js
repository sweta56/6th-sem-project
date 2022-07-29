import {Route,Routes} from 'react-router-dom'
import {Home,Login,Signup,About,Calendar,Appointment} from './components/Index'

import DoctorInfo from './components/Reuseable/DoctorInfo'
import Form from './pages/Form';

const NavBarRoutes = () => {
    return (
        <>
        <Routes>
             <Route path="/"  element={<Home/>}/>
             <Route path="/doctorInfo/:name" element={<DoctorInfo/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/signup" element={<Signup/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/appointment" element={<Appointment/>}/>
             <Route path="/form" element={<Form/>}/>
             <Route path="/calendar" element={<Calendar/>}/>
        </Routes>
        
        </>
    )
}

export default NavBarRoutes;