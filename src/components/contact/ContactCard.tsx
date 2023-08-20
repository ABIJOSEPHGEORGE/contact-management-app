import { useDispatch } from "react-redux"
import { deleteSingleContact } from "../../store/contactSlice";
import { useNavigate } from "react-router-dom";


type Props = {
    singleContact:{
        first_name: string,
        last_name: string,
        status: string,
    },
    index:number,
}

const ContactCard = ({singleContact, index}:Props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //handling delete contact
    const hanldeDeleteContact = (inx:number) => {
        dispatch(deleteSingleContact(inx));
    }

    //handle edit contact
    const handleEditContact = (inx:number) => {
        navigate('/edit-contact',{state:{index:inx}})
    }

  return (
    <div className="bg-white w-80 rounded-lg shadow-lg p-5 md:1/4 flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-3">
            <h3 className="text-lg font-semibold ">{singleContact.first_name} {singleContact.last_name}</h3>
            <h5 className="text-lg font-semibold">Status: <span className={singleContact.status === 'active' ? 'text-green-300' : 'text-red-300'}>{singleContact.status}</span></h5>
            <div className="w-full flex flex-col items-center gap-5">
                <button className="rounded-lg text-white px-6 py-2 bg-green-500 w-full" onClick={()=>handleEditContact(index)}>Edit</button>
                <button className="rounded-lg text-white px-6 py-2 bg-red-500 w-full" onClick={()=>hanldeDeleteContact(index)}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default ContactCard;