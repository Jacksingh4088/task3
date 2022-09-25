import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

function ApiTable() {
    const [user, setUser] = useState([]);
    
    const getUser = async () =>{
        try{
            const response = await axios.get('https://devapi.2gathers.com/api/users/view-users/?userId=5&eventId=227');
            console.log(response.data.userDetails);
            setUser(response.data.userDetails);
        }
        catch(error){
            console.log(error);
        }
    };
    // console.log(user)

    useEffect(() => {
        getUser();
    }, []);


    const columns = [

        {
            name : "First Name",
            selector : (row) => row.firstName,
        },
        {
            name : "Email Id",
            selector : (row) => row.email,
        },
        {
            name : "Box",
            selector : (row) => row.seatInfo[0].boxName,
        },
        {
            name : "Seats",
            selector : (row) => row.seatInfo[0].seatName,
        }
    ];

  

  return (
    <>
        <DataTable 
        title="Users" 
        columns={columns}
        data={user} 
        fixedHeader
        pagination
        fixedHeaderScrollHeight='350px'
        highlightOnHover
        subHeader
        subHeaderComponent={
            <input type='text' placeholder='Search Here'/>
        }
        />
    </> 
  )

}

export default ApiTable