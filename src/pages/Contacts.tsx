import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { useNavigate } from 'react-router-dom';
import ContactCard from '../components/contact/ContactCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
    const { contacts } = useSelector((state: RootState) => state.contact);
    const navigate = useNavigate();

    return (
        <div className='w-full flex flex-col items-center'>
            <ToastContainer position='top-center'/>
            <div className="w-full flex justify-center ml-10 md:ml-0">
                <button className='bg-green-500 text-white font-semibold px-5 py-3 rounded-md' onClick={() => navigate('/create-contact')}>Create Contact</button>
            </div>
            <div className="w-full flex flex-col items-center">
                {
                    contacts.length ?
                        <div className="w-full p-8 ml-10 md:ml-5 md:p-14 xl:px-14 xl:py-6 flex flex-col md:flex-row flex-wrap justify-center lg:justify-start gap-4">
                            {
                                contacts.map((contact, index) => (
                                    <ContactCard singleContact={contact} index={index} key={contact.first_name + index}/>
                                ))
                            }
                        </div>
                        :
                        <div className='w-full flex flex-col justify-center items-center p-4 ml-12 md:ml-0'>
                            <img src="/no-contact.jpg" alt="no_contact_found" className='w-3/4 md:w-1/4'/>
                            <h3 className='capitalize leading-6 text-xl font-semibold text-gray-700 text-center'>No contact found, please add a contact from the Create Contact button</h3>
                        </div>
                }
            </div>
        </div>
    );
};

export default Contacts;
