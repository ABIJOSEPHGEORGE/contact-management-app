import { useForm, SubmitHandler } from "react-hook-form"
import { ContactSchema, contactSchema } from "../../lib/types";
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch, useSelector } from "react-redux";
import { updateContact } from "../../store/contactSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { RootState } from "../../store/rootReducer";
import { toast } from 'react-toastify';

const EditContact = () => {
    const { contacts } = useSelector((state:RootState) => state.contact);
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<ContactSchema>({
        resolver: zodResolver(contactSchema)
    });


    // Check if id is undefined
    if (location.state.index === undefined) {
        return (
            <div className="w-full p-4 flex flex-col justify-center items-center gap-5 ml-5 md:ml-0">
                <img src="/invalid-contact.jpg" alt="invalid_contact" className="w-1/4"/>
                <h1 className="text-lg font-semibold">Invalid Contact Details</h1>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={()=>navigate('/')}>Go Back to Contacts</button>
            </div>
        )
    }

    // Convert the id to a number
    const contactIndex = parseInt(location.state.index, 10);

    // Check if the converted id is valid
    if (isNaN(contactIndex) || contactIndex < 0 || contactIndex >= contacts.length) {
        return <div className="w-full p-4 flex flex-col justify-center items-center gap-5">No contact found</div>
    }

    const contact = contacts[contactIndex];

    const onSubmit: SubmitHandler<ContactSchema> = (data) => {
        //Storing the contact information to redux
        dispatch(updateContact({index: contactIndex, singleContact: data}));
        toast.success("Contact Editted Successfully...")
        navigate('/');
    }


  return (
    contact ? 
    <div className="w-full p-4 flex flex-col justify-center items-center gap-5 ml-5 md:ml-0">
        <h2 className="font-semibold text-center text-2xl">Edit Contact</h2>
        <form className="w-4/5 space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
                <label htmlFor="first_name" className="text-xl flex gap-2 items-center">
                    First Name: 
                    <input type="text" {...register('first_name')} placeholder="First Name" className="rounded-xl px-4 py-3 w-4/5 bg-gray-100 outline-none" defaultValue={contact.first_name}/>
                </label>
                {errors.first_name && <p className="text-sm text-red-500">{errors.first_name?.message}</p>}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="first_name" className="text-xl flex gap-2 items-center">
                    Last Name: 
                    <input type="text" {...register('last_name')} placeholder="Last Name" className="rounded-xl px-4 py-3 w-4/5 bg-gray-100 outline-none" defaultValue={contact.last_name}/>
                </label>
                {errors.last_name && <p className="text-sm text-red-500">{errors.last_name?.message}</p>}
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex gap-5">
                    <h4 className="text-xl">Status: </h4>
                    <div className="flex flex-col gap-3 ml-8">
                        <label className="flex items-center gap-2">
                            <input type="radio" {...register('status')} value={'active'} name="status" defaultChecked = {contact.status === "active"}/>
                            Active
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" {...register('status')} value={'inactive'} name="status" defaultChecked = {contact.status === "inactive"}/>
                            Inactive
                        </label>
                    </div>
                </div>
                {errors.status && <p className="text-sm text-red-500">{errors.status?.message}</p>}
            </div>
            <div className="flex justify-center">       
                <button className="text-lg text-center text-white bg-green-500 px-4 py-2 rounded-md font-semibold"  type="submit">Save Editted Contact</button>
            </div>
        </form>
    </div>
    :
    <div className="w-full flex justify-center ml-5 md:ml-0">No data</div>
  )
}

export default EditContact