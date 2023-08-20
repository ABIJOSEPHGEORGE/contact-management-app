import { Route, Routes, useLocation } from 'react-router-dom';
import Contacts from '../pages/Contacts';
import CreateContact from './contact/CreateContact';
import EditContact from './contact/EditContact';
import ChartsAndMap from '../pages/ChartsAndMap';

export function AppRoutes(){
    const location = useLocation();

    return(
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Contacts/>}/>
            <Route path='/create-contact' element={<CreateContact/>}/>
            <Route path='/edit-contact' element={<EditContact/>}/>
            <Route path='/charts-and-map' element={<ChartsAndMap/>}/>
        </Routes>
    )
}