import { FiUser } from 'react-icons/fi';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';

const Sidebar = () => {
    const { toggle } = useSelector((state: RootState) => state.navigation);
  return (
        <div className={`md:${toggle ? 'w-1/6' : 'max-w-3/6' } flex-wrap min-h-screen z-50 bg-white shadow-xl mt-16 flex flex-col justify-start py-6 items-center gap-6 font-semibold fixed top-0 left-0`}>
            <Link to={'/'} className="w-full px-4 py-2 flex space-x-3 items-end">
                <FiUser size={30} className='text-gray-500'/>
                {
                    toggle && <h2 className='text-lg'>Contact</h2>
                }
            </Link>
            <Link to={'/charts-and-map'} className="w-full px-4 flex space-x-3 items-end">
                <IoAnalyticsSharp size={30} className='text-gray-500'/>
                {
                    toggle &&  <h2 className='text-lg'>Charts and Maps</h2>
                }
            </Link>
        </div>
  )
}

export default Sidebar