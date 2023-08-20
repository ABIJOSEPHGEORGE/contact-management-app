import { useForm, SubmitHandler } from "react-hook-form"
import { ContactSchema, contactSchema } from "../../lib/types";
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from "react-redux";
import { createContact } from "../../store/contactSlice";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';

const CreateContact = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<ContactSchema>({
        resolver: zodResolver(contactSchema)
    });

    const onSubmit: SubmitHandler<ContactSchema> = (data) => {
        //Storing the contact information to redux
        dispatch(createContact(data));
        toast.success("Contact created successfully...")
        navigate('/');
    }
    
    
  return (
    <div className="w-full p-4 flex flex-col justify-center items-center gap-5 ml-5 md:ml-0">
        <h2 className="font-semibold text-center text-2xl">Create Contact</h2>
        <form className="w-4/5 space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
                <label htmlFor="first_name" className="text-xl flex gap-2 items-center">
                    First Name: 
                    <input type="text" {...register('first_name')} placeholder="First Name" className="rounded-xl px-4 py-3 w-4/5 bg-gray-100 outline-none"/>
                </label>
                {errors.first_name && <p className="text-sm text-red-500">{errors.first_name?.message}</p>}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="first_name" className="text-xl flex gap-2 items-center">
                    Last Name: 
                    <input type="text" {...register('last_name')} placeholder="Last Name" className="rounded-xl px-4 py-3 w-4/5 bg-gray-100 outline-none"/>
                </label>
                {errors.last_name && <p className="text-sm text-red-500">{errors.last_name?.message}</p>}
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex gap-5">
                    <h4 className="text-xl">Status: </h4>
                    <div className="flex flex-col gap-3 ml-8">
                        <label className="flex items-center gap-2">
                            <input type="radio" {...register('status')} value={'active'} name="status"/>
                            Active
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" {...register('status')} value={'inactive'} name="status" defaultChecked/>
                            Inactive
                        </label>
                    </div>
                </div>
                {errors.status && <p className="text-sm text-red-500">{errors.status?.message}</p>}
            </div>
            <div className="flex justify-center">       
                <button className="text-lg text-center text-white bg-green-500 px-4 py-2 rounded-md font-semibold"  type="submit">Save Contact</button>
            </div>
        </form>
    </div>
  )
}

export default CreateContact