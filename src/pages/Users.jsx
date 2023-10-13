import React from "react";
import Dashboard from "../Dashboard/Dashboard";
// import { url } from "../config/config";
import axios from 'axios'
import { useEffect,useState } from "react";
import UsersTable from "../components/UsersTable";
import { baseURL } from "../config/url";
const Users = () => {
    const [data,setData] = useState([]);
    const getData = async () =>{
        try {
               const res = await axios.get(`${baseURL}/users`);
               const users = res.data.users
               console.log(users)
               setData(users) 
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
     getData()
    },[])
  return (
    <Dashboard>
      <div style={{width:"100%"}}>
        <UsersTable data={data}/>
      </div>
    </Dashboard>
  );
};

export default Users;
