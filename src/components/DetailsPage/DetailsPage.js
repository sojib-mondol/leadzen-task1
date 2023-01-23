import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const DetailsPage = () => {
    const [informations, setInformations] = useState([]);

   const {id} = useContext(AuthContext);

   const navigate = useNavigate();

   

    useEffect(() => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data =>  {
            const details = data.filter(de => de.id === id);
            setInformations(details[0])
        })
   },[])
    
   console.log("Information", informations);
    
   if(!id){
    navigate('/');
   } 
    

    return (
        <div >
             <div className='bg-white p-5 rounded m-5 '>
                <div className='grid grid-cols-5'>
                    <div className='my-auto'>
                        <h3>{informations.name}</h3>
                    </div>
                    <div>
                        <h2>CONTACT</h2>
                        <h3>{informations.contact}</h3>
                    </div>
                    <div>
                        <h2>CITY</h2>
                        <h3>{informations.city}</h3>
                    </div>
                    <div>
                        <h2>STATE</h2>
                        <h3>{informations.state}</h3>
                    </div>
                    <div className=''>
                        {/* onClick={() => addDetails(id)} */}
                        <Link to='/'><button className="btn btn-error rounded-full ">Hide Details</button></Link>
                    </div>
                </div>

                <div className='p-10'>
                    <div className='mt-5'>
                        <h2 className='text-xl font-bold'>Description</h2>
                        <p>{informations.description}</p>
                    </div>
                    <div className='grid grid-cols-2 mt-5'>
                        <div>
                            <h2 className='text-xl font-bold'>Contact Person</h2>
                            <p>{informations.contact}</p>
                            <h2 className='text-xl font-bold'>Designation</h2>
                            <p>{informations.designation}</p>
                            <h2 className='text-xl font-bold'>Emails</h2>
                            <p>{informations.email}</p>
                            <h2 className='text-xl font-bold'>Phones</h2>
                            <p>{informations.phone}</p>
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>Addderss</h2>
                            <p>{informations.adderss}</p>
                            <h2 className='text-xl font-bold'>City</h2>
                            <p>{informations.city}</p>
                            <h2 className='text-xl font-bold'>State</h2>
                            <p>{informations.state}</p>
                            <h2 className='text-xl font-bold'>Country</h2>
                            <p>{informations.country}</p>
                        </div>
                    </div>
                </div>
                
            </div>
            
                

        </div>
    );
};

export default DetailsPage;