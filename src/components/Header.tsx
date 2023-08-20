import { IoMdMenu } from 'react-icons/io';
import { LiaAngleDoubleRightSolid } from 'react-icons/lia';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { toggleSidebar } from '../store/navigationSlice';

export const Header = () => {
    const { toggle } = useSelector((state: RootState) => state.navigation);
    const dispatch = useDispatch();

    // toggling sidebar menu
    const toggleSidebarMenu = () => {
        dispatch(toggleSidebar(!toggle))
    }
  return (
    <div className="bg-white shadow-sm w-full h-16 fixed top-0 flex items-center p-6 gap-3">
        {
            toggle ?
            <IoMdMenu size={30} className=' cursor-pointer' onClick={toggleSidebarMenu}/>
            :
            <LiaAngleDoubleRightSolid size={30} className=' cursor-pointer' onClick={toggleSidebarMenu}/>
        }
        <h1 className='text-xl font-semibold text-green-500 cursor-pointer'>Contact Management App</h1>
    </div>
  )
}