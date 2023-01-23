import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const TableInfo = ({info} ) => {
    const {name, username, address, id} = info;

    const {setId, id:ID} = useContext(AuthContext);
    // console.log("ID", ID);

    return (
        <>

            <div className='bg-white p-5 rounded m-5 grid grid-cols-5'>
                <div className='my-auto'>
                    <h3>{name}</h3>
                </div>
                <div>
                    <h2>CONTACT</h2>
                    <h3>{username}</h3>
                </div>
                <div>
                    <h2>CITY</h2>
                    <h3>{address?.city}</h3>
                </div>
                <div>
                    <h2>STATE</h2>
                    <h3>{address?.city}</h3>
                </div>
                <div className=''>
                    {/* onClick={() => addDetails(id)} */}
                    <Link to={`/detals`} > <button onClick={() => setId(id)} className="btn btn-error rounded-full ">View Details</button> </Link>
                </div>
            </div>
            
        </>
    );
};

export default TableInfo;