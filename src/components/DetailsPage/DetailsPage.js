import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const DetailsPage = () => {
    const [informations, setInformations] = useState([]);

   const {id} = useContext(AuthContext);

   const navigate = useNavigate();

   

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
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
                        <h3>{informations.username}</h3>
                    </div>
                    <div>
                        <h2>CITY</h2>
                        <h3>{informations.address?.city}</h3>
                    </div>
                    <div>
                        <h2>STATE</h2>
                        <h3>{informations.address?.city}</h3>
                    </div>
                    <div className=''>
                        <Link to='/'><button className="btn btn-error rounded-full ">Hide Details</button></Link>
                    </div>
                </div>

                <div className='p-10'>
                    <div className='mt-5'>
                        <h2 className='text-xl font-bold'>Description</h2>
                        <p>{}</p>
                    </div>
                    <div className='grid grid-cols-2 mt-5'>
                        <div>
                            <h2 className='text-xl font-bold'>Contact Person</h2>
                            <p>{informations.username}</p>
                            <h2 className='text-xl font-bold'>Designation</h2>
                            <p>{informations?.company?.name}</p>
                            <h2 className='text-xl font-bold'>Emails</h2>
                            <p>{informations?.email}</p>
                            <h2 className='text-xl font-bold'>Phones</h2>
                            <p>{informations?.phone}</p>
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>Addderss</h2>
                            <p>{informations?.address?.street}, {informations?.address?.suite}, {informations?.address?.city}, {informations?.address?.zipcode}</p>
                            <h2 className='text-xl font-bold'>City</h2>
                            <p>{informations?.address?.city}</p>
                            <h2 className='text-xl font-bold'>State</h2>
                            <p>{informations?.address?.city}</p>
                            <h2 className='text-xl font-bold'>Country</h2>
                            <p>{informations?.address?.city}</p>
                        </div>
                    </div>
                </div>
                
            </div>
            
                

        </div>
    );
};

export default DetailsPage;