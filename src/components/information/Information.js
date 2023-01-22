import React, { useEffect, useState } from 'react';
import TableInfo from '../tableInfo/TableInfo';

const Information = () => {

    const [informations, setInformations] = useState([]);


    useEffect(() => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data =>  setInformations(data))
   },[])

    return (
        <div className='bg-blue-100  p-5 rounded'>
            {
                informations.map(info => <TableInfo
                    key={info.id}
                    info={info}
                ></TableInfo>)
            }
        </div>
    );
};

export default Information;