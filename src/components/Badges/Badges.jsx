import React from "react";
import "./badge.css";


const Badges = ({ priority,status }) => {
  return (
    <>
        {
            priority ? (<span
                className={`c-pill ${
                    priority == "Normal"
                    ? "c-pill--success"
                    : priority == "High"
                    ? "c-pill--warning"
                    : priority == "Critical"
                    ? "c-pill--danger"
                    : priority == "Low"
                    ? "c-pill--success"
                    : ""
                }`}
              >{priority}</span>) :status ?(<span
                className={`c-pill ${
                    status == "On Hold"
                    ? "c-pill--success"
                    : status == "Cancelled"
                    ? "c-pill--warning"
                    : status == "Closed"
                    ? "c-pill--danger"
                    : priority == "Resolved"
                    ? "c-pill--success"
                    : ""
                }`}
              >{status}</span>):""
           
            
        }
    </>
  );
};

export default Badges;
