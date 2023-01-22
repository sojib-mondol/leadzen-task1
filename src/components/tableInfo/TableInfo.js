import React from 'react';

const TableInfo = ({info}) => {
    const {name, contact, city, state, details, id} = info;


    return (
        <>

            <div className='bg-white p-5 rounded m-5 grid grid-cols-5'>
                <div className='my-auto'>
                    <h3>{name}</h3>
                </div>
                <div>
                    <h2>CONTACT</h2>
                    <h3>{contact}</h3>
                </div>
                <div>
                    <h2>CITY</h2>
                    <h3>{city}</h3>
                </div>
                <div>
                    <h2>STATE</h2>
                    <h3>{state}</h3>
                </div>
                <div className=''>
                    <button className="btn btn-error rounded-full ">View Details</button>
                </div>
            </div>
            
        </>
    );
};

export default TableInfo;