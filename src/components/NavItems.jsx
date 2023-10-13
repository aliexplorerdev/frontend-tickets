import * as React from "react";
import {

  DashboardOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,

} from "@mui/icons-material";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

const NavItems = () => {
  const navigate = useNavigate();
  const navItems = [
    {
      text: "Dashboard",
      icon: <DashboardOutlined />,
    },
    
    {
      text: "Tickets",
      icon: <ShoppingCartOutlined />,
    },
    
    {
      text: "Users",
      icon: <Groups2Outlined />,
    },
   
   
 
  ];
  return (
    <>
       {navItems.map((item,i) => (
        
        <ListItemButton  onClick={() => {
            const route = item.text.toLowerCase();
             let text = route.replace(/\s+/g, "-")

             text == "dashboard" ?  navigate(`/`) :  navigate(`/${text}`)
             console.log("text",text)
         
        }} key={i}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      ))}
    </>
  )
}

export default NavItems