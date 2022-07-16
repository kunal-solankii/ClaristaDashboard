import React, { useEffect, useState } from 'react'
import { data } from './Data'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CandidateData() {

    const [firstnameIn, setFN] = useState('');
    const [lastnameIn, setLN] = useState('');
    const [emailIn, setEM] = useState('');
    const [genderIn, setG] = useState('');
    const [newAdded, setNewAdded] = useState(1);
    const [filterValue, setFilterValue] = useState("");
    const [searchV,setSearchV] = useState("");



    var len = data.length + 1;

    useEffect(() => {
        console.log('useEffect Called');
    }, [newAdded, filterValue,searchV])

    const handleSubmit = () => {
        console.log(firstnameIn, ' ', lastnameIn, ' ', emailIn, ' ', genderIn);
        var objNewCandidate = {
            id: len,
            first_name: firstnameIn,
            last_name: lastnameIn,
            email: emailIn,
            gender: genderIn

        }
        console.log(objNewCandidate)
        if (objNewCandidate["first_name"] != '' && objNewCandidate["last_name"] != '' && objNewCandidate["email"] != '' && objNewCandidate["gender"] != '') {
            console.log(objNewCandidate);
            data.push(objNewCandidate);
            setNewAdded(len);
        }

         else
         {
        toast.error('Invalid Inputs !');
         }
    }

    // const checkFilter = (data) =>
    // {
    //     if(data["gender"] == filterValue)
    //         {return data;}


    // }
    // const handleFilterValue = (input) => {

    //     if (input == "Male") {
    //         setFilterValue("Male");
    //     }
    //     if (input == "Female") {
    //         setFilterValue("Female");
    //     }
        // if(isM && isF)
        // {
        //     setFilterValue("Male Female");
        // }
        // if(input == "Male")
        // {
        //     setIsM(!isM);
        // }

        // if(input == "Female")
        // {
        //     setIsF(!isF);
        // }
    

    return (
        <div>
            <div className="flex justify-start mt-8 ml-2">
                <div className="mr-12" onChange={(e) => { setFilterValue(e.target.value); setSearchV(null) }}>
                    <input  name="Check"
                        type="radio"  value="Male"/>
                        &nbsp;&nbsp;&nbsp;Male&nbsp;&nbsp;&nbsp;
                    <input  name="Check"
                        type="radio"value="Female"/> &nbsp;&nbsp;&nbsp;Female
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className="ml-72 w-1/2">
                    <input type="text" className="
        
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            "
                        id="search"
                        placeholder="Whom are you looking for ?"
                        onChange={(e)=>{setSearchV(e.target.value)}}
                        onKeyDown={(e)=>{(e.key == 'Enter') ? setSearchV(e.target.value) : console.log('Wrong Key') }}
                    />
                </div>
                <div>
                </div>
            </div>
            <table className='mt-12 table-auto text-gray-600 border-separate border-spacing-2 border border-slate-200'>
                <tr>
                    <th className='border border-slate-300 px-14 bg-gray-50'> # </th>
                    <th className='px-24 border border-slate-300 bg-gray-50 font-bold'> First Name </th>
                    <th className='px-24 border border-slate-300 bg-gray-50 font-bold'> Last Name </th>
                    <th className='px-24 border border-slate-300 bg-gray-50 font-bold'> email </th>
                    <th className='px-24 border border-slate-300 bg-gray-50 font-bold'> Gender </th>
                </tr>
                {console.log(filterValue)}
                {data.map((elements) => (

                    elements["gender"] == filterValue || elements["first_name"].includes(searchV) ?

                        <tr key={elements["id"]}>
                            <td className='border border-slate-200'>
                                {elements["id"]}
                            </td>
                            <td className='border border-slate-200'>
                                {elements["first_name"]}
                            </td>
                            <td className='border border-slate-200'>
                                {elements["last_name"]}
                            </td>
                            <td className='border border-slate-200'>
                                {elements["email"]}
                            </td>
                            <td className='border border-slate-200'>
                                {elements["gender"]}
                            </td>
                        </tr> : null
                ))}
            </table>
            <div className='mt-4'>
                <h1 className='my-4 text-2xl font-bold text-gray-700'>Add a new Candidate</h1>
                <input required className='w-1/2 border border-solid border-b-2 border-x-0 border-t-0 focus:ring-0'
                    type="text"
                    value={firstnameIn}
                    onChange={(e) => { setFN(e.target.value) }}
                    placeholder='First Name ' name="First_name_new"></input>
                <input required className='w-1/2 border border-solid border-b-2 border-x-0 border-t-0'
                    type="text"
                    onChange={(e) => { setLN(e.target.value) }}
                    placeholder='Last Name ' name="last_name_new"></input>
                <br />

                <input required className='mt-8 w-full' type="email"
                    onChange={(e) => { setEM(e.target.value) }}
                    placeholder='email' name="email_new"></input>
            </div>
            <br />
            <div required onChange={(e) => { setG(e.target.value) }}>
                <input required type='radio' name='gender_new' value="Male"
                // checked={objNewCandidate["gender"]==="Male"}
                >
                </input>&nbsp;&nbsp;Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='radio' name='gender_new' value="Female"
                    // checked={objNewCandidate["gender"]=="Female"}
                    // onChange={(e) => { setG(e.target.value) }}
                ></input>&nbsp;&nbsp;Female
            </div>
            <br />
            <div className=' text-center'>
                <button onClick={handleSubmit} className=' rounded-full w-1/4 py-2 text-center bg-indigo-700 hover:bg-indigo-400 text-gray-100 font-medium px-12'>
                    ADD
                </button>
            </div>
            {<ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />}
        </div>




    )
}
