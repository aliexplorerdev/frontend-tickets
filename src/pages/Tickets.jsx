import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { useEffect, useState } from "react";
import TicketsTable from "../components/TicketsTable";
import { baseURL } from "../config/url";
import TicketsModal from "../components/Modals/TicketsModal";
import { ToastContainer } from "react-toastify";
const Tickets = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get(`${baseURL}/tickets`);
      const tickets = res.data;
      console.log(tickets);
      setData(tickets);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
      };
    
      // Function to close the modal
      const closeModal = () => {
        setIsModalOpen(false);
      };
  return (
    <>
    <Dashboard>
      <div style={{ width: "100%" }}>
        <div style={{display:"flex",justifyContent:"end",margin:"20px 0px"}}>
        <Button variant="contained" startIcon={<AddIcon /> } onClick={openModal}>
          Add Ticket
        </Button>
        </div>
        <TicketsTable data={data} />
        <TicketsModal open={isModalOpen} handleClose={closeModal}/>
      </div>
    </Dashboard>

    <ToastContainer/>
    
    </>
  );
};

export default Tickets;
